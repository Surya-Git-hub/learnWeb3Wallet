"use client"
import { Web3Button,useWeb3Modal,Web3Modal } from '@web3modal/react'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Web3Button />
      
    </main>
  )
}
