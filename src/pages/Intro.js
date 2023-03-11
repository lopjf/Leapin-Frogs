import React from 'react'
import { Link } from 'react-scroll';

const Intro = () => {
  return (
	<div className='intro' id='intro'>
		<div className="bg-background1 bg-no-repeat bg-cover bg-center bg-fixed">
			<div className="flex flex-col items-center pt-20 md:pt-40 pb-10 md:pb-20">
				<h1 className="text-5xl md:text-8xl lg:text-9xl pt-8 md:pt-0">Leapin' Frogs</h1>
					<div className="bg-white p-4 my-4 md:p-10 md:my-10 rounded-lg bg-opacity-80 xl:w-3/5 md:w-5/6 drop-shadow-lg">
						<p className="text-justify text-xl md:text-4xl">Leapin' Frogs is a  NFTs collection featuring a charming and adventurous frog with a trusty leather backpack. Each NFT captures a unique moment in the frog's life, highlighting its spirit of curiosity and wonder, making every situation an opportunity for growth and learning. Join the adventure, take home a piece of the magic, and experience the infectious spirit of the Leapin' Frogs collection for yourself! </p>
					</div>
					<div className='pt-6'>
						<Link to="minting" spy={true} smooth={true} offset={0} duration={800} className='pixel2 text-center'>
							<p className='text-5xl px-6'>Mint<br/>Now</p>
						</Link>
					</div>
			</div>
		</div>
	</div>

  )
}

export default Intro
