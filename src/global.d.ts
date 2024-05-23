// src/global.d.ts or src/types/global.d.ts

import { ExternalProvider } from 'ethers';

declare global {
  interface Window {
    ethereum: ExternalProvider;
  }
}

// src/global.d.ts

declare namespace JSX {
  interface IntrinsicElements {
    'w3m-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}
