'use client';

import {
  faFacebookF,
  faGithubAlt,
  faLinkedinIn,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelopeOpen,
  faLocationDot,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styled from 'styled-components';

import { Content, FullPage, PageNumber, Title } from '@/theme/globalStyles';

const ContactDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 4rem;
`;

const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SocialColumn = styled(ContactColumn)`
  gap: 1.25rem;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.5;
  }
`;

export const Contact = () => (
  <FullPage id="contact">
    <Content>
      <PageNumber>/04</PageNumber>
      <Title>Contact</Title>
    </Content>
    <ContactDetails>
      <ContactColumn>
        <ContactDetail>
          <FontAwesomeIcon icon={faPhone} />
          <StyledLink href="tel:+19044017142" target="_blank">
            9044017142
          </StyledLink>
        </ContactDetail>
        <ContactDetail>
          <FontAwesomeIcon icon={faLocationDot} />
          <StyledLink
            href="https://www.google.com/maps/place/Orlando,+FL"
            target="_blank"
          >
            Orlando, Florida, USA
          </StyledLink>
        </ContactDetail>
        <ContactDetail>
          <FontAwesomeIcon icon={faEnvelopeOpen} />
          <StyledLink href="mailto:ryzizn@gmail.com" target="_blank">
            Email: Ryzizn@gmail.com
          </StyledLink>
        </ContactDetail>
      </ContactColumn>
      <SocialColumn>
        <ContactDetail>
          <FontAwesomeIcon icon={faGithubAlt} />
          <StyledLink href="https://github.com/ryansmpsn" target="_blank">
            GitHub
          </StyledLink>
        </ContactDetail>
        <ContactDetail>
          <FontAwesomeIcon icon={faLinkedinIn} />
          <StyledLink
            href="https://www.linkedin.com/in/ryan-developer/"
            target="_blank"
          >
            LinkedIn
          </StyledLink>
        </ContactDetail>
        <ContactDetail>
          <FontAwesomeIcon icon={faFacebookF} />
          <StyledLink
            href="https://www.facebook.com/RyanSimpsonSoftware"
            target="_blank"
          >
            Facebook
          </StyledLink>
        </ContactDetail>
        <ContactDetail>
          <FontAwesomeIcon icon={faXTwitter} />
          <StyledLink href="https://twitter.com/Ryan_Software" target="_blank">
            X
          </StyledLink>
        </ContactDetail>
      </SocialColumn>
    </ContactDetails>
  </FullPage>
);
