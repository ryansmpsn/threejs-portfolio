const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`
};

export const lightTheme = {
  text: '#363537',
  muted: '#4c4c4c',
  toggleBorder: '#FFF',
  background: '#FFF',
  foreground: '#dcdcdc',
  device: device
};
export const darkTheme = {
  text: '#FAFAFA',
  muted: '#4c4c4c',
  toggleBorder: '#6B8096',
  background: 'black',
  foreground: '#dcdcdc',
  device: device
};
