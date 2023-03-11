import React from 'react'
import { useState } from 'react';
import AccordionItem from '../components/Accordionitem';

const Accordion = () => {

	// Accordion

	const [open, setOpen] = useState(false);

	const toggle = (index) => {
		if(open === index) {
			return setOpen(null)
		}
		setOpen(index)
	}

	const accordionData = [
	{
		title:"What is Leapin' Frogs?",
		desc:"Leapin' Frogs is a collection of 101 charming, pixelated images that depict the many adventures and experiences of a curious and adventurous frog. Each image in the collection captures a unique moment in the frog's life, from wandering through the forest to strolling through city streets. The frog is always accompanied by its trusty leather backpack, ready to take on the world and discover new wonders. The collection has a retro Sega style and showcases the frog's infectious spirit of curiosity and wonder. Take home a piece of the magic and join us on an unforgettable journey through the eyes of our plucky and charming frog.",
	},
	{
		title:"How can I buy Leapin' Frogs?",
		desc:"To buy Leapin' Frogs, you can mint them directly on our website. Each unique NFT can be minted up to a maximum of five NFT per wallet. Simply connect your wallet to the website, make sure to be connected on the Polygon network, and follow the simple steps. The NFTs are available for purchase now and are perfect for collectors who appreciate the unique charm and retro Sega style of our adventurous frog. The colleciton is also available on Opensea. Don't miss your chance to own a piece of this delightful and heartwarming collection!",
	},
	{
		title:"Who created all this?",
		desc:"By buying a Leapin' Frog NFT, you are not only acquiring a delightful piece of art, but you are also supporting a passionate entrepreneur with a vision to create disruptive NFT swapping platforms. The retro Sega-style pixelated images are sure to appeal to collectors and fans alike. And as a token of our appreciation for early trust, all Leapin' Frogs owners will be rewarded as we continue to grow and develop new initiatives. So why not join the adventure today and own a piece of this heartwarming collection?",
	},
	{
		title:"What is the price of a Leapin' Frogs NFT?",
		desc:"For now, you can own a piece of the charming and unique Leapin' Frogs NFT collection for just 20 MATIC. At the time of writing, that's roughly equivalent to $20 USD, but please note that the value of cryptocurrencies can be volatile and subject to change. Once the collection is sold out, the price will depend on the free market on NFT exchanges. So don't wait too long to join the adventure and add a delightful piece of art to your collection!",
	},
];

  return (
	<div>
	  <section className='py-20 lg:py-40 xl:py-64 bg-background2 bg-no-repeat bg-cover bg-center bg-fixed grid place-content-center'>
		<div className='px-[40px] max-w-[800px]'></div>

		{accordionData.map((data, index) => {
			return <AccordionItem key={index} open={index === open} title={data.title} desc={data.desc} toggle={()=>toggle(index)} />;
		})}

</section>
	</div>
  )
}

export default Accordion
