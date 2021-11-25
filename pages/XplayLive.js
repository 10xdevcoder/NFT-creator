import React, { useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import ReactPlayer from 'react-player';
import CeramicClient from '@ceramicnetwork/http-client';
import "shaka-player/dist/controls.css";
import { NFTStorage, File, Blob } from "nft.storage";
import Head from 'next/head'

function XplayLive() {
    const Livepeer_apiKey = 'b2172553-2098-4b0c-b679-3dffba1409c8';
    const Livepeer = require("livepeer-nodejs");
    const ShakaPlayer = dynamic(() => import('shaka-player-react'), { ssr: false });
    const livepeerObject = new Livepeer(Livepeer_apiKey);
    const [data, setData] = useState(null);
    const [stream, setStream] = useState(null);
    const [show, setShow] = useState(false);

    const [nftName, setNftName] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");

    const [nftUrl, setNftUrl] = useState("");

    const [covData, setCovData] = useState(null);

    const [ceramicStream, setCeramicStream] = useState(null);

    const content = {
        "name": "test_stream",
        "profiles": [
            {
                "name": "720p",
                "bitrate": 2000000,
                "fps": 30,
                "width": 1280,
                "height": 720
            },
            {
                "name": "480p",
                "bitrate": 1000000,
                "fps": 30,
                "width": 854,
                "height": 480
            },
            {
                "name": "360p",
                "bitrate": 500000,
                "fps": 30,
                "width": 640,
                "height": 360
            },
        ],
        "record": true
    };
    const startStream = () => {
        livepeerObject.Stream.create(content).then((res) => {
            console.log("stream started");
            setData(res);
            setShow(true);
        });
    };

    const getStreamUrl = async () => {
        const url = `https://livepeer.com/api/session?limit=20&parentId=${data.id}`;
        console.log(data.id);

        const streamLists = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${Livepeer_apiKey}`,
            },
        });

        if (streamLists.data.length === 0) {
            alert("No stream detected");
            return;
        }
        setStream(streamLists.data[0].mp4Url);

        if (stream === "") alert("stream is currently processing");
    };
    const mintStream = async (e) => {
        e.preventDefault();
        if (stream === "") {
            alert("Stream is currently processing");
            return;
        }
        if (stream === null) {
            alert("No stream detected");
            return;
        }

        alert("Stream is currently being minted ");

        const PortApiKey = 'af6d4865 - bd49 - 453f-8f44 - 5d3d49448b93';
        const mintUrl = "https://api.nftport.xyz/v0/mints/easy/urls"
        const body = {
            "chain": "rinkeby",
            "name": nftName,
            "description": description,
            "file_url": stream,
            "mint_to_address": address
        };
        const auth = {
            headers: {
                Authorization: PortApiKey
            }
        };

        const res = await axios.post(mintUrl, body, auth);

        if (res.status === 200) {
            alert("Successfully minted stream, yeeaah you have an NFT");
            setNftName("");
            setDescription("");
            // setAddress("");
            setNftUrl(res.data.transaction_external_url);


            const client = new NFTStorage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDhERTlFNTEyOEUxMjFBODcwRjJEZkNmMUE3RkE4NzliMTgwNUFGODUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNzM3Nzg0NTUxNiwibmFtZSI6Ik1ldGFYIn0.WOKTP5 - jx2QRwevGzKwWvyhfJon4AgnwJmQrsjRSzDw' });
            const cid = await client.storeBlob(new Blob([{
                chain: res.data.chain,
                contract_address: res.data.contract_address,
                transaction_hash: res.data.transaction_hash,
                description: res.data.description,
                address: res.data.mint_to_address
            }]));
            const covalent = "https://api.covalenthq.com/v1/1/address/" + address + "/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&key=" + 'ckey_e22bfa8a9c734c1e816244b1529';
            const covalentRes = await axios.get(covalent);
            setCovData(covalentRes.data.data);
        } else {
            alert("Error with minting of the stream");
        }
    }
    const copyData = () => {
        navigator.clipboard.writeText(JSON.stringify(covData));
    }
    const ceramic = async () => {

        const API_URL = "https://gateway-clay.ceramic.network";
        const ceramic = new CeramicClient(API_URL);

        const stream = await ceramic.loadStream(ceramicStream);
    }

    return (
        <>

            <Head>
                <title>MetaX | playlive</title>
            </Head>
            <div style={{
                position: 'relative',
                margin: '30px'
            }}>

                <div className="stream-url-text-box">
                    Stream url: {stream !== "" && stream !== null ? <b>{stream}</b> : stream === "" ? <b>stream currently processing</b> : <b>No streams created</b>}
                </div>

                {/*https://www.youtube.com/watch?v=ECKyIeiSBT4     test url */}
                <button className='rounded bg-blue-500 py-2 px-8 text-white m-13' onClick={startStream}>Stream Video</button>
                {data ? <p>stream key: {data.streamKey} <p>server: rtmp://rtmp.livepeer.com/live </p><p>
                    stream id: {data.id}</p> <p>
                        Input the above in a streaming software like OBS</p>
                    <p>{stream}</p></p> : null
                }
                {show ? <button className='rounded bg-blue-500 py-2 px-8 text-white m-13' onClick={getStreamUrl}>Play Stream</button> : null}

                <div className="video-container ShakaPlayer">
                    {stream !== "" && stream !== null ? <div>
                        <ShakaPlayer autoPlay src={stream} />
                    </div> : <div> <br></br>
                        <br></br>
                        <h3>video will appear here </h3> </div>}

                </div>


                {
                    nftUrl !== "" ? <a href={nftUrl} target="_blank">View NFT</a> : null
                }

                <br /><br />
                <form>
                    <input
                        className='mt-1 border rounded p-3'
                        value={nftName}
                        type="text"
                        placeholder="Name of NFT"
                        onChange={(e) => setNftName(e.target.value)}
                        name="nftName"
                        required
                    />
                    <input
                        className='mt-1 border rounded p-3'
                        value={description}
                        type="text"
                        placeholder="Description of NFT"
                        onChange={(e) => setDescription(e.target.value)}
                        name="description"
                        required
                    />
                    <input
                        className='mt-1 border rounded p-3'
                        value={address}
                        type="text"
                        placeholder="Wallet Address"
                        onChange={(e) => setAddress(e.target.value)}
                        name="address"
                        required
                    />
                    <button className='rounded bg-blue-600 py-2 px-12 text-white m-16' onClick={mintStream}>Mint Video</button>
                </form>

                {
                    covData !== null ? <p>{JSON.stringify(covData)}</p> : null
                }
                {
                    covData !== null ? <button className='rounded bg-blue-500 py-2 px-8 text-white m-13' onClick={() => copyData()}>Copy Data</button> : null
                }
            </div >

        </>
    );

}

export default XplayLive;
