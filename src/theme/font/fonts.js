import { Cormorant_Garamond } from 'next/font/google';
import localFont from 'next/font/local';

export const centuryGothic = localFont({ src: './centurygothic.ttf' });
export const coromont = Cormorant_Garamond({
  weight: ['300', '400', '500'],
  subsets: ['latin']
});
