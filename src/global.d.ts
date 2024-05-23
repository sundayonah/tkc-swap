// src/global.d.ts or src/types/global.d.ts

import { ExternalProvider } from 'ethers';

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}

// Ensure this part is also in the same file
declare namespace JSX {
  interface IntrinsicElements {
    'w3m-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
