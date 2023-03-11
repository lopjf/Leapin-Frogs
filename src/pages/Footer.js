import React from 'react'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
	
<footer className="p-4 bg-white sm:p-6 container mx-auto">
<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div className="">
        <div className="md:text-2xl flex justify-center">
            <div>
                <ul className="text-gray-600">
                    <li className="mb-4">
                        <Link to="intro" spy={true} smooth={true} duration={1000} className="hover:underline cursor-pointer">Home</Link>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="text-gray-600 px-6">
                    <li className="mb-4">
                        <a href="https://t.me/+mXpyU2n11i0yMGFk" className="hover:underline ">Telegram</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="text-gray-600">
                    <li className="mb-4">
                        <a href="https://opensea.io/collection/leapinfrogs" className="hover:underline ">Opensea</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
	<div className="flex items-center justify-center pt-6">
        <span className="text-sm md:text-lg text-gray-500 sm:text-center">© 2023 
        <Link to="intro" className="hover:underline cursor-pointer" spy={true} smooth={true} duration={1000}>Leapin' Frogs™</Link>
        . All Rights Reserved.
        </span>
	</div>
</footer>

  )
}

export default Footer
