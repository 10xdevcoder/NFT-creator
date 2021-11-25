import '../styles/globals.css'
const ethers = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(`https://eth-rinkeby.alchemyapi.io/v2/avpSFE4CFF97rciebprxcggQd2cF18mJ`);
//const signer = provider.getSigner()

//const [walletAddress, setWallet] = useState("");
import styled from 'styled-components'

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
        <img width={200} height={200} src="/Meta.png" />
        <div className="flex mt-6"
        >
         
          <Link href="/">
            <a style={{ padding: '0rem 1rem' }} className="text-0.05px text-blue-dark md:text-0.05px">
              MarketPlace
            </a>
          </Link>
          
          
          <Link href="/create-item">
            <a style={{ padding: '0rem 2rem' }} className=" text-0.05px text-blue-dark md:text-0.05px">
              CreateNFT
            </a>
          </Link>
          <Link href="/EnsLogic">
            <a style={{ padding: '0rem 2rem' }}
              className="text-0.05px text-blue-dark md:text-0.05px">
              SearchENS
            </a>
          </Link>
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
            style={{ padding: '0rem 2rem' }}
            type='button' onClick={onClickConnect} >Connect</button>
        </div>
      </nav >
      < Component {...pageProps} />

     
    </div >
  )

}

export default MyApp;
