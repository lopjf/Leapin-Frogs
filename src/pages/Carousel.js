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
