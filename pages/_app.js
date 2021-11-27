import '../styles/globals.css'
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.g.alchemy.com/v2/2CjGw9Qa34v-UXMLq_aFG1AkD9monu47`);
//const signer = provider.getSigner()

//const [walletAddress, setWallet] = useState("");


import React, { useState, useEffect } from 'react';
import Link from 'next/link'

import { render } from 'react-dom';
async function onClickConnect() {
  try {
    // Will open the MetaMask UI
    await ethereum.request({ method: 'eth_requestAccounts' });

  } catch (error) {
    console.error(error);
  }

};

function MyApp({ Component, pageProps }) {


  return (
    <div>
      <nav style={{
        height: '90px',

        display: 'flex',
        background: '#0c162c',
        color: '#0c162c',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
      >
        <img width={300} height={300} src="/NFT creator.png" />
        <div className="flex mt-6"
        >
           <Link href="/">
            <a style={{ padding: '0rem 2rem' }} className="text-0.05px text-blue-dark md:text-0.05px">
              Home
            </a>
          </Link>
          
         
          <Link href="/MarketPlace">
            <a style={{ padding: '0rem 2rem' }} className="text-0.05px text-blue-dark md:text-0.05px">
              MarketPlace
            </a>
          </Link>
          
          
          <Link href="/create-item">
            <a style={{ padding: '0rem 2rem' }} className=" text-0.05px text-blue-dark md:text-0.05px">
              CreateNFT
            </a>
          </Link>
          {/* <Link href="/EnsLogic">
            <a style={{ padding: '0rem 2rem' }}
              className="text-0.05px text-blue-dark md:text-0.05px">
              SearchENS
            </a>
          </Link> */}
          <Link href="/my-nfts">
            <a style={{ padding: '0rem 2rem' }} className="text-0.05px text-blue-dark md:text-0.05px">
              MyNFTS
            </a>
          </Link>
          <Link href="/creatorDashboard">
            <a style={{ padding: '0rem 2rem' }} className="text-0.05px text-blue-dark md:text-0.05px">
              Profile
            </a>
          </Link>
          <button
            className="text-0.05px text-blue-dark md:text-0.05px"
            style={{ padding: '0rem 3rem' }}
            type='button' onClick={onClickConnect} >Connect</button>
        </div>
      </nav >
      < Component {...pageProps} />

     
    </div >
  )

}

export default MyApp;
