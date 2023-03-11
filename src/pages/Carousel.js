import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
const Carousel = () => {

const slides = [
	{
		url: 'https://ipfs.io/ipfs/bafybeihmcftsiq2cvfots5j6p4thnmpylpnldazctzojlny6ta2rkx4pwi/1.jpg' // 1
	},
	{
		url: 'https://ipfs.io/ipfs/bafybeihmcftsiq2cvfots5j6p4thnmpylpnldazctzojlny6ta2rkx4pwi/2.jpg' // 2
	},
	{
		url: 'https://ipfs.io/ipfs/bafybeihmcftsiq2cvfots5j6p4thnmpylpnldazctzojlny6ta2rkx4pwi/3.jpg' // 3
	},
	{
		url: 'https://ipfs.io/ipfs/bafybeihmcftsiq2cvfots5j6p4thnmpylpnldazctzojlny6ta2rkx4pwi/4.jpg' // 4
	},
	{
		url: 'https://ipfs.io/ipfs/bafybeihmcftsiq2cvfots5j6p4thnmpylpnldazctzojlny6ta2rkx4pwi/5.jpg' // 5
	},
	{
		url: 'https://ipfs.io/ipfs/bafybeihmcftsiq2cvfots5j6p4thnmpylpnldazctzojlny6ta2rkx4pwi/6.jpg' // 6
	},
	{
		url: 'https://ipfs.io/ipfs/bafybeihmcftsiq2cvfots5j6p4thnmpylpnldazctzojlny6ta2rkx4pwi/7.jpg' // 7
	},
	{
		url: 'https://ipfs.io/ipfs/bafybeihmcftsiq2cvfots5j6p4thnmpylpnldazctzojlny6ta2rkx4pwi/8.jpg' // 8
	},
	{
		url: 'https://ipfs.io/ipfs/bafybeihmcftsiq2cvfots5j6p4thnmpylpnldazctzojlny6ta2rkx4pwi/9.jpg' // 9
	},
	{
		url: 'https://ipfs.io/ipfs/bafybeihmcftsiq2cvfots5j6p4thnmpylpnldazctzojlny6ta2rkx4pwi/10.jpg' // 10
	},
];

  return (
	<div>
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
	</div>
  )
}

export default Carousel
