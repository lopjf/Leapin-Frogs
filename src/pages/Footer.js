import React from 'react'
import { Link } from 'react-scroll';

const Footer = () => {
  return (
	
<footer className="p-4 bg-white sm:p-6 container mx-auto">
<hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <div className="flex justify-center">
        <div className="grid gap-8 sm:gap-2 grid-cols-3 md:text-2xl">
            <div>
                <ul className="text-gray-600">
                    <li className="mb-4">
                        <Link to="intro" spy={true} smooth={true} duration={1000} className="hover:underline cursor-pointer">Home</Link>
                    </li>
                </ul>
            </div>
            <div>

                {/* <a href="#" className="text-gray-500 hover:text-gray-900">
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" /></svg>
                <span className="sr-only">Telegram page</span>
                </a> */}

                <ul className="text-gray-600">
                    <li className="mb-4">
                        <a href="https://t.me/+mXpyU2n11i0yMGFk" className="hover:underline ">Telegram</a>
                    </li>
                </ul>
            </div>
            <div>
                <ul className="text-gray-600">
                    <li className="mb-4">
                        <a >Opensea (Soon)</a>
                        {/* href="#" className="hover:underline" */}
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
