/* eslint-disable react/no-unknown-property */
'use client';

import { useFBO } from '@react-three/drei';
import { Canvas, createPortal, extend, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';

import SimulationMaterial from '../materials/SimulationMaterial';
import fragmentShader from '../shaders/fragmentShader.glsl';
import vertexShader from '../shaders/vertexShader.glsl';

extend({ SimulationMaterial: SimulationMaterial });

const CanvasContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  opacity: 0.5;
`;

const FBOParticles = () => {
  const size = 128;

  const points = useRef();
  const simulationMaterialRef = useRef();

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(
    -1,
    1,
    1,
    -1,
    1 / Math.pow(2, 53),
    1
  );
  const positions = new Float32Array([
    -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0
  ]);
  const uvs = new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]);

  const renderTarget = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType
  });

  const particlesPosition = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      const i3 = i * 3;
      particles[i3 + 0] = (i % size) / size;
      particles[i3 + 1] = i / size / size;
    }
    return particles;
  }, [size]);

  const uniforms = useMemo(
    () => ({
      uPositions: {
        value: null
      }
    }),
    []
  );

  useFrame((state) => {
    const { gl, clock } = state;

    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    points.current.material.uniforms.uPositions.value = renderTarget.texture;

    simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterial ref={simulationMaterialRef} args={[size]} />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  );
};

export const MainCanvas = () => {
  return (
    <CanvasContainer>
      <Canvas camera={{ position: [0, 0.5, 1.1] }}>
        <ambientLight intensity={0.5} />
        <FBOParticles />
        {/* <OrbitControls /> */}
      </Canvas>
    </CanvasContainer>
  );
};
