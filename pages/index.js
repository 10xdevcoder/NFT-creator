import React from 'react'
import Head from 'next/head'
function index () {
return (
<>
<Head>
    <title>NFTC | Home</title>
</Head>

<div className='grid place-items-center text-5xl '><h1 className='text-blue-light'><u>Welcome to NFT creator</u></h1></div>
<br></br>

<div className='grid place-items-center text-2xl '>
<div className='grid place-items-center text-3xl text-green '>What do NFT creator do ?</div>

    <p> <li className='text-blue-dark'>NFT creator is a place where you can create unique nfts and mint them.</li></p>
    <br></br>
    <p><li className='text-blue-dark'>Who need opensea or rarible, with NFT creator you can put your nft for sale right there. </li></p>
    <br></br>
<div className='grid place-items-center text-3xl text-blue-light '>How is NFT creator built ?</div>

    <p><li className='text-blue-dark'>NFT creator is fully polygonized i.e it smart contracts are deployed on polygon, it connect only to the polygon network and the currency for minting, buying, selling and gas fees are all in MATIC (the native currency for the polygon chain).</li></p>
    <br></br>
    <p><li className='text-blue-dark'>This DApp currently use the polygon testnet(mumbai) to avoid using real money for testing.</li></p>
    <br></br>
    <p><li className='text-blue-dark'>NFT creator was also built using alchemy and moralis endpoints and it the future hope to rely on moralis database.</li></p>
    <br></br>
    <div className='grid place-items-center text-3xl text-blue-light '>How does NFT creator work ?</div>
    <p><li className='text-blue-dark'>When a file is uploaded to NFT creator and the required information are filled in the createItems tab.</li></p>
    <br></br>
    <p><li className='text-blue-dark'>NFT creator then mints it into Nft with a little gass fee then you are automatically request to place the nft in the market place. </li></p>
    <br></br>
    <p><li className='text-blue-dark'>NFT creator then give you listing price for the nft and then place it on the market place as your NFT for sale with the price you set. </li></p>
    <br></br>
    <p><li className='text-blue-dark'>Buyers can come at anytime to purchase your NFT and the DApp will update automatically. </li></p>
    <br></br>
</div>
</>
);
}
export default index;