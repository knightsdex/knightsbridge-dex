import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base, bsc } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Knightsbridge DEX',
  projectId: 'YOUR_PROJECT_ID', // Get this from https://cloud.walletconnect.com
  chains: [mainnet, polygon, optimism, arbitrum, base, bsc],
  ssr: false, // If your dApp uses server side rendering (SSR)
});