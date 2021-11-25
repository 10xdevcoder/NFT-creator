import { type } from 'os';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import Head from 'next/head'


class XplayVids extends React.Component {




    constructor(props) {
        super(props);

        this.state = {
            inputvalue: "",
            url: ""
        }
    }
    handleChange = (event) => {
        this.setState({ inputvalue: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        //  console.log("clicked");
        this.setState({ url: this.state.inputvalue })
    }

    render() {
        return (
            <>
                <Head>
                    <title>MetaX | playvid</title>
                </Head>
                <div id='reactPlayer' className="reactPlayer">
                    <header classame="ReactP">
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={this.handleChange}
                                    required
                                    style={{
                                        margin: '35px',
                                        width: '310px',
                                        height: '50px'
                                    }}
                                    className="mt-2 border rounded p-5"
                                    type="text"
                                    placeholder="Input video URL" />
                                <button style={{
                                    margin: '40px',

                                }} className="hover:bg-black-500 rounded bg-blue-600 py-2 px-12 text-white m-16">Play Video</button>
                            </form>
                            <p style={{
                                overflow: 'hidden',
                                // display: 'flex',
                                position: 'relative',
                                left: '30px'
                            }}
                            >NOTE: The url of the video must be correct and surpported, if not it may cause the system to crash.</p>
                            <p style={{

                                position: 'relative',
                                left: '30px'
                            }}
                            >Supported URL includes YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura. </p>

                        </div>
                        <ReactPlayer

                            width='700px'
                            height='400px'
                            style={{
                                margin: '50px',
                                display: 'flex',
                                left: '40px'
                            }}

                            controls
                            url={this.state.url} />
                    </header >

                </div >
            </>
        );
    }
}

export default XplayVids;
