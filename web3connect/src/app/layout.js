"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { arbitrum, mainnet, polygon, sepolia, goerli } from 'wagmi/chains'

const inter = Inter({ subsets: ['latin'] });

const chains = [sepolia, mainnet, polygon, goerli, arbitrum]
const projectId = 'eb377f8878487f35be77ce714ecebe12'
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)


// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
//   }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter}>
        <WagmiConfig config={wagmiConfig}>
          {children}
        </WagmiConfig>
        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </body>
    </html>
  )
}
