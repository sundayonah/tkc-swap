import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// import { WagmiConfig } from 'wagmi';


// 1. Get projectId
const projectId = '60fa83860edbb9d7d2e1df131caa2675';
// const projectId = process.env.NEXT_APP_PROJECTID;

// 2. Create wagmiConfig
const metadata = {
   name: "tkc-swap",
   description: 'tkc swap',
   url: 'Staking',
   icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  defaultChainId: 1 // used for the Coinbase SDK
})

const mainnet = {
  chainId: 56, // BSC Mainnet
  name: 'Binance Smart Chain',
  currency: 'BNB', // BNB is the native cryptocurrency of BSC
  explorerUrl: 'https://bscscan.com', // BSCScan is the equivalent of Etherscan but for BSC
  rpcUrl: 'https://bsc-dataseed.binance.org' // BSC RPC URL
};


createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
