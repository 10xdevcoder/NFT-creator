import React from 'react';
const ethers = require('ethers');
const provider = ethers.getDefaultProvider();
import Head from 'next/head'
class EnsLogic extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            inputvalue: "",
            search: ""
        }
    }
    handleChange = (event) => {
        this.setState({ inputvalue: event.target.value })
    }
    handleSubmit = async (event) => {
        var stats
        event.preventDefault();
        // console.log("clicked");
        this.setState({ search: this.state.inputvalue })
        stats = this.state.search;
        if (stats.length === 42) {
            console.log(stats);

            var name = await provider.lookupAddress(stats);
            if (name === null) {
                alert("No ENS name for this address");
                <p>No ENS name for this address</p>
            } else {
                console.log(stats);
                alert(name);
                <p>The Name for {stats}- {name}</p>

            }
            // ethers.js automatically checks that the forward resolution matches.
        } else if (stats.length < 42) {
            var Ensaddress = await provider.resolveName(stats);
            if (Ensaddress === null) {
                alert("No ens name this address");
                <>
                    <p>No Address for this account </p>
                    <p>May be get one from <a href='https://ens.domains/'> ENS site</a> </p>
                </>
            } else {
                <p>{Ensaddress}</p>
                alert(Ensaddress);
                console.log(stats);
            }
        } else {
            alert("Nothing really ");
            <>
                <p>Nothing really</p>
                <p>No Address or ENS name for this account </p>
                <p>May be get one from <a href='https://ens.domains/'> ENS site</a> </p>
            </>
        }


    }

    render() {

        return (
            <>
             <Head>
        <title>NFTC | EnsLogic</title>
      </Head>
                <h1 style={{
fontSize:'25px',
                    position: 'relative',
                    left: '30px'
                }} >This is a simple ENS resolution.
                    <h1>Please double click the search button upon any change for confirmation.</h1></h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        required
                        className="mt-8 border rounded p-4"
                        style={{
                            width: '400px',
                            height: '40px',

                            position: 'relative',
                            left: '30px'
                        }}
                        type="text"
                        id="header-search"
                        placeholder="Input ENS name or an address"

                    />
                    <button style={{
                        position: 'relative',
                        left: '35px'

                    }}

                        className="mt-4 bg-blue-dark text-white rounded px-5 py-2 shadow-xs" >Search</button>
                </form>

            </>
        )
    };
}


export default EnsLogic;

