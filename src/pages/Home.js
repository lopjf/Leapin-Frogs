import { useState } from 'react';
import { ethers, BigNumber } from 'ethers';	
import React from 'react'
import liquidSquid from '../LiquidSquid.json';	// this enable us to grab the ABI, to connect to our contract
import AccordionItem from '../components/Accordionitem';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

const Home = ({ connectAccount, isConnected }) => {

	// Mint page
	
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

	// Carousel page

	const slides = [
		{
			url: 'https://cdn.midjourney.com/a3d14172-8e49-46bd-993f-f95d4e33bb2a/grid_0.png' // 1
		},
		{
			url: 'https://cdn.midjourney.com/be14c13d-a2ca-4a06-b992-0db167e1d9d3/grid_0.png' // 2
		},
		{
			url: 'https://cdn.midjourney.com/3b917151-6bd6-4a6e-b0c4-65976ea8b0af/grid_0.png' // 3
		},
		{
			url: 'https://cdn.midjourney.com/cd209792-ceee-4ed4-88a9-b62b02b69263/grid_0.png' // 4
		},
		{
			url: 'https://cdn.midjourney.com/9e889d93-3d5e-4b6a-920c-d543219496e4/grid_0.png' // 5
		},
		{
			url: 'https://cdn.midjourney.com/03bc67f4-b4b3-468a-ab6c-8ba7f95349d7/grid_0.png' // 6
		},
		{
			url: 'https://cdn.midjourney.com/39695d84-0f98-4a6d-96e5-b2bc79a84c1a/grid_0.png' // 7
		},
		{
			url: 'https://cdn.midjourney.com/16f50eb9-53b8-48e0-a266-8e501443660d/grid_0.png' // 8
		},
		{
			url: 'https://cdn.midjourney.com/c28944bf-975c-4e3f-acaf-cac11361e6d3/grid_0.png' // 9
		},
		{
			url: 'https://cdn.midjourney.com/95f72c54-4d8c-4bb8-ac38-f5ce46464fe3/grid_0.png' // 10
		},
	];

	// Accordion page

	const [open, setOpen] = useState(false);

	const toggle = (index) => {
		if(open === index) {
			return setOpen(null)
		}
		setOpen(index)
	}

	const accordionData = [
	{
		title:"What is Leapin' Frogs",
		desc:"nfhsdiaofgbhi",
	},
	{
		title:"How many NFT is there",
		desc:"nfhsdiaofgbhi2",
	},
	{
		title:"Is the a roadmap?",
		desc:"Leapin' Frog was created by a motivated entrepreneur that aims on creating disruptive NFT swapping platform. All Leapin' Frogs owner will be rewarded for their early trust",
	},
];

	return (
	<div>
		{/* 1st page */}
		<div className="bg-background1 bg-no-repeat bg-cover bg-center bg-fixed">
			<div className="flex flex-col items-center pt-20 md:pt-40 pb-20">
				<h1 className="text-5xl md:text-8xl lg:text-9xl">Leapin' Frogs</h1>
					<div className="bg-white p-4 my-4 md:p-10 md:my-10 rounded-lg bg-opacity-80 xl:w-3/5 md:w-5/6 drop-shadow-lg">
						<p className="text-justify text-xl md:text-4xl">Leapin' Frogs is a  NFTs collection featuring a charming and adventurous frog with a trusty leather backpack. Each NFT captures a unique moment in the frog's life, highlighting its spirit of curiosity and wonder, making every situation an opportunity for growth and learning. Join the adventure, take home a piece of the magic, and experience the infectious spirit of the Leapin' Frogs collection for yourself! </p>
					</div>
					<div className='pixel2 text-center'>
						<p className='text-5xl px-6'>Mint<br/>Now</p>
					</div>
			</div>
		</div>
		

		{/* Carousel */}

	<div className='p-10 md:p-20 bg-gray-100 flex justify-center items-center w-full'>
	<div className='bg-gray-200 md:p-12 rounded-lg max-w-[700px] max-h-[700px]'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
		loop={true}
		autoplay={{
			delay: 3000,
		}}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
			<img src={slides[0].url} alt="0" className='rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
			<img src={slides[1].url} alt="1" className='rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
			<img src={slides[2].url} alt="2" className='rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
			<img src={slides[3].url} alt="3" className='rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
			<img src={slides[4].url} alt="4" className='rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
			<img src={slides[5].url} alt="5" className='rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
			<img src={slides[6].url} alt="6" className='rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
			<img src={slides[7].url} alt="7" className='rounded-lg' />
        </SwiperSlide>
        <SwiperSlide>
			<img src={slides[8].url} alt="8" className='rounded-lg' />
        </SwiperSlide>
		<SwiperSlide>
			<img src={slides[9].url} alt="9" className='rounded-lg' />
        </SwiperSlide>
      </Swiper>
	  </div>
	  </div>

		{/* Accordion */}

<section className='py-20 lg:py-40 xl:py-64 bg-background2 bg-no-repeat bg-cover bg-center bg-fixed grid place-content-center'>
		<div className='px-[40px] max-w-[800px]'></div>

		{accordionData.map((data, index) => {
			return <AccordionItem key={index} open={index === open} title={data.title} desc={data.desc} toggle={()=>toggle(index)} />;
		})}

</section>

		{/* 2nd page */}
		<div className="bg-slate-50 px-20 xl:px-40 2xl:px-96 py-20">
			<div className="flex flex-col items-center text-center py-10 md:py-20 bg-slate-200 rounded-lg drop-shadow-lg">
				<h1 className="text-3xl md:text-5xl">Leapin' Frogs</h1>
				{isConnected ? (
					<>
					<p className="pt-10 md:pt-20 text-lg md:text-2xl w-5/6 xl:w-4/6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eaque suscipit minima ipsum laborum autem dolores illo ex obcaecati aliquid!</p>
					<div className="mt-10 md:mt-20 flex justify-evenly items-center w-1/4">
						<div className='pixel2'>
							<p className='px-4' onClick={handleDecrement}>-</p>
						</div>
						<input type="text" value={mintAmount} className="text-center w-10 mx-2" readonly />
						<div className='pixel2'>
							<p className='px-4' onClick={handleIncrement}>+</p>
						</div>
					</div>
					<div className='pixel2'>
						<p onClick={handleMint}>MINT NOW</p>
					</div>

					</>
					  ) : (
						<>
							<p className="pt-20 pb-10 text-4xl text-red-500">Please connect your wallet to continue.</p>
							<div className="pixel2">
						  		<p onClick={connectAccount()}>Connect Wallet</p>
							</div>
						</>
					)}
			</div>
		</div>

		{/* 3rd page */}
		{/* <div className="bg-background2 bg-no-repeat bg-cover bg-bottom bg-fixed relative"> */}
		<div className="bg-background3 bg-no-repeat bg-cover bg-bottom bg-fixed">
			<div className="py-60 flex justify-evenly w-1/2 mx-auto">
					<div className="text-4xl">
						<p>
						
In the magical world of Leapin' Frogs,<br/>
There's a curious creature, hopping logs.<br/>
With a leather backpack on his back,<br/>
This intrepid frog is always on the attack.<br/>
<br/>
In 101 moments, we see his life unfold,<br/>
A story of adventure, waiting to be told.<br/>
He walks through cities, with towering walls,<br/>
And wanders through woods, where the sunlight falls.<br/>
<br/>
He crosses oceans, where the sea wind blows,<br/>
And explores deserts, where the hot sand glows.<br/>
No path is too treacherous, no place too far,<br/>
He's fearless and bold, like a shining star.<br/>
<br/>
The frog has no name, but his spirit is free,<br/>
A traveler at heart, like you and me.<br/>
We wonder where he is now, and what he might see,<br/>
As he leaps through life, with joyful glee.<br/>
<br/>
He roams through the countryside, with his pack on his back,<br/>
Through meadows and fields, where the wildflowers stack.<br/>
He climbs up mountains, with snow on the peaks,<br/>
And walks through valleys, where the river runs and speaks.<br/>
<br/>
He loves the moments, when the sun sets in the sky,<br/>
And paints the world, with colors that make us sigh.<br/>
He feels the raindrops, as they touch his skin,<br/>
And marvels at the world, that we all live in.<br/>
<br/>
Through all his travels, he seeks the simple joys,<br/>
The wonders that surround us, in life's many alloys.<br/>
He takes in the beauty, of every place he goes,<br/>
And finds the happiness, in the things that most don't know.<br/>
<br/>
So come and join the Leapin' Frogs adventure,<br/>
In a world where pixels, come alive with texture.<br/>
A collection of memories, capturing the frog's essence,<br/>
And all the wonder, of his daring presence.<br/>
</p>
					</div>
			</div>
		</div>
		{/* <div className="absolute inset-0 bg-background2 opacity-50"></div> */}
	</div>
  )
}

export default Home
