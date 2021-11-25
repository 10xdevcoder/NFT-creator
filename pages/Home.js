import React, { Component } from 'react'
import Head from 'next/head'

function Home() {



    async function purchaseMembership() {
        const ethers = require('ethers')
        const abis = require('@unlock-protocol/contracts')

        // Wrapping all calls in an async block

        // Here we use a Rinkeby provider. We will be able to read the state, but not send transactions.
        await ethereum.request({ method: 'eth_requestAccounts' });
        const url = "https://eth-rinkeby.alchemyapi.io/v2/avpSFE4CFF97rciebprxcggQd2cF18mJ";
        const provider = new ethers.providers.JsonRpcProvider(url)

        // This time, we also need a signer.
        // Note: we sent some fake Eth to this address, but please replace with your own!
        const signer = provider.getSigner();
        //const wallet = ethers.Wallet.fromMnemonic('speed already skull purchase artwork join execute twist they animal entire champion')   //fromMnemonic('seed cube fiction obvious cover riot edge beauty pelican radio useful strong')

        //const signer = wallet.connect(provider)
        /*      await signer.signMessage('Purchase our membership and become part of our DAO')
      
              //We will interact with a lock deployed on rinkeby at this address 0xafa8fE6D93174D17D98E7A539A90a2EFBC0c0Fc1
              const address = '0x4D21008e45E6d41a33c21516A0fDF40a5CbfabEb'
      
              // Let's go purchase the membership for this lock
              const lock = new ethers.Contract(address, abis.PublicLockV8.abi, signer)
      
              // If the lock was using an ERC20 as currency, we would need to send an approval transaction on the ERC20 contract first...
      
              // Let's get the key price so we know how much we need to send (we could send more!)
              const amount = await lock.keyPrice()
      
              //Purchase params:
              const purchaseParams = [
                  amount,
                  signer, // This is the recipient of the membership (us!)
                  signer, // The is the referrer who will earn UDT tokens (we'd like this to be us!)
                  [], // empty data object (not used here)
              ] */

        // const gasPrice = await provider.getGasPrice() // Let's get the current gas price
        //   const options = {
        //     gasPrice,
        //        value: amount // This is a lock that uses Ether, so it means we need send value. If it was an ERC20 we could set this to 0 and just use the amount on purchase's first argument
        //   }

        // Important: we need to compute the gasLimit ourselves because it is a funcion of gasPrice
        // For safety we could also bump it (the user is refunded the difference anyway)
        /*  const gasEstimate = await lock.estimateGas.purchase(...purchaseParams, options)
          options.gasLimit = gasEstimate
          const tx = await signer.sendTransaction({
              to: address,
              value: amount
          });
  
          // We can now send transactions to modify the state of the lock, like purchase a key!
          const transaction = await lock.purchase(...purchaseParams, options)
  
          const receipt = await transaction.wait() */
    }




    return (
        <>
            <div>
                <h1
                    className="text-center text-5x1 ">Welcome to MetaX, now face the unlickable gelato ice Cream.</h1>
            </div>
            <br></br>
            <div className='flex flex-row ' style={{
                margin: '20px'
            }} className='flex flex-row text-center'>
                <img style={{
                    position: 'relative',
                    left: '40px'
                }} width={150} height={220} src="/gelato.png" />
                <img style={{
                    position: 'relative',
                    left: '70%'
                }} width={150} height={220} src="/gelato.png" />
                <br></br>
                <div>

                    <h1
                    >
                        Welcome to MetaX </h1>
                    <br></br>
                    <p >
                        A place where you can stream a video from livepeer and mint it as nft </p>
                    <br></br>
                    <p >
                        you can also create digital assets as nfts and put it up for sale </p>
                    <br></br>
                    <p >
                        you earn rewards why doing all this, you get our custom XFT token </p>
                    <br></br>
                    <p >
                        get enough XFT then you can trade it and become part of our DAO </p>
                    <br></br>
                    <p >To be part of our DAO, content creators must own the two gelato ice cream pillar</p>
                    <br></br>

                    <button

                        onClick={purchaseMembership}
                        className="mt-4 bg-blue-500 text-white rounded p-4 shadow-lg"> Lick IceCream</button>
                </div>

            </div>



        </>
    );


}

export default Home
