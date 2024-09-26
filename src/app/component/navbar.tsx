import React from 'react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

const Navbar = ()=>{
    return (
        <nav>
            <h1>logo</h1>
            <WalletMultiButton />
        </nav>
    )
  }
  
  export default Navbar