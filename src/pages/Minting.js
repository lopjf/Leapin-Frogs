import React from 'react'
import liquidSquid from '../LiquidSquid.json';	// this enable us to grab the ABI, to connect to our contract
import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';	

const Minting = ({ connectAccount, isConnected }) => {
	// Minting
	
	const [mintAmount, setMintAmount] = useState(1);
	const liquidSquidAddress = "0x593E0473ec5321C5622A1F7aB96698586c71E81d";
	const minAmount = 1;
	const maxAmount = 5;

	async function handleMint() {
		// all of this is necessary so we can use the contract functions
		if (window.ethereum) {	// if the user is connected (loged in to metamask)
			const provider = new ethers.providers.Web3Provider(window.ethereum);	// this provides a way for ethers to connect to the blockchain. It is a initial set-up
			const signer = provider.getSigner();	// for every transaction we need a signer. something that signs the transactions
			const contract = new ethers.Contract(
				liquidSquidAddress,
				liquidSquid.abi,
				signer
			);
			try {		// BigNumber is used because Solidity requires it
				const response = await contract.mint(BigNumber.from(mintAmount), {
					value: ethers.utils.parseEther((0.02 * mintAmount).toString()),	// we're passing the mint price
				});	// call the smart contract function mint
				console.log('response: ', response);	// the response doesn't really matter but we still check it
			} catch (err) {	// if anything failes then we catch it to give an error, just in case
				console.log("error: ", err)
			}
		}
	}

	const handleDecrement = () => {	// this will be run when we click the 'minus' button
		if (mintAmount <= minAmount) return;
		setMintAmount(mintAmount - 1);
	};

	const handleIncrement = () => {	// this will be run when we click the 'plus' button
		if (mintAmount >= maxAmount) return;
		setMintAmount(mintAmount + 1);
	};

  return (
	<div className='minting' id='minting'>
	  		<div className="bg-slate-50 px-8 lg:px-20 xl:px-40 2xl:px-96 py-20">
			<div className="flex flex-col items-center text-center py-10 md:py-20 bg-slate-200 rounded-lg drop-shadow-lg">
				<h1 className="text-3xl md:text-5xl">Leapin' Frogs</h1>
				{isConnected ? (
					<>
					<p className="pt-10 md:pt-20 text-lg md:text-2xl w-5/6 xl:w-4/6">Get your very own Leapin' Frogs NFT for just 0.01 ETH per NFT.
You can mint up to 5 NFTs per wallet.
Each NFT represents a unique moment in the life of our adventurous and curious frog.
Once sold out, the price of these rare and delightful NFTs will depend on the free market on NFT exchanges.
Don't wait too long to add a piece of the magic to your collection mint your Leapin' Frogs NFTs today!</p>
					<div className="mt-10 md:mt-20 flex justify-evenly items-center w-1/4">
						<div className='pixel3 lg:pixel2' onClick={handleDecrement}>
							<p className='px-4'>-</p>
						</div>
						{/* <input type="text" value={mintAmount} className="text-center w-10 mx-2 text-4xl" readonly /> */}
						<span className="text-center w-10 mx-4 lg:mx-2 text-4xl">{mintAmount}</span>
						<div className='pixel3 lg:pixel2' onClick={handleIncrement}>
							<p className='px-4'>+</p>
						</div>
					</div>
					<div className='pixel3 lg:pixel2' onClick={handleMint}>
						<p>MINT NOW</p>
					</div>

					</>
					  ) : (
						<>
							<p className="pt-10 md:pt-20 pb-10 px-4 text-3xl sm:text-4xl text-red-500">Please connect your wallet to access the minting page.</p>
							<div className="pixel3 lg:pixel2" onClick={connectAccount}>
						  		<p>Connect Wallet</p>
							</div>
						</>
					)}
			</div>
		</div>
	</div>
  )
}

export default Minting
