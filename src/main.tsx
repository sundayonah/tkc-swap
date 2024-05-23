import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import { StakingContextProvider } from '@/Context/StakeContext';
// import Header from '@/components/header';
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
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1 // used for the Coinbase SDK
})

const mainnet = {
  chainId: 56, // BSC Mainnet
  name: 'Binance Smart Chain',
  currency: 'BNB', // BNB is the native cryptocurrency of BSC
  explorerUrl: 'https://bscscan.com', // BSCScan is the equivalent of Etherscan but for BSC
  rpcUrl: 'https://bsc-dataseed.binance.org' // BSC RPC URL
};

// const chains = [mainnet, arbitrum, bsc, bscTestnet, polygon, sepolia, goerli];
// const wagmiConfig = defaultConfig({ chains, projectId, metadata });

// // 3. Create modal
// createWeb3Modal({ wagmiConfig, projectId, chains });
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
