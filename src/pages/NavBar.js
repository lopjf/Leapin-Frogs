import React from 'react'
import Logo from '../logo.png'
import { Link } from 'react-scroll';

const NavBar = ({ connectAccount, isConnected }) => {


  return (


<nav className="bg-white bg-opacity-30 px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0" >
  <div className="container flex flex-wrap items-center justify-between mx-auto">
    <Link to="intro" spy={true} smooth={true} duration={500} className="flex items-center cursor-pointer">
      <img src={Logo} className="h-8 mr-3 md:h-16" alt="Leapin' Frogs Logo" />
      <span className="self-center font-semibold whitespace-nowrap text-lg sm:text-2xl md:text-4xl">Leapin' Frogs</span>
    </Link>
    <div className="items-center justify-between w-auto">
      {/* <ul className="flex items-center flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0"> */}
      <ul className="flex items-center p-0 md:p-4 flex-row space-x-4 sm:space-x-8 border-0">
        <li>
            <a href="https://t.me/+mXpyU2n11i0yMGFk" className="text-black hover:text-gray-900">
              <svg className="w-8 h-6 sm:w-10 sm:h-8 md:w-16 md:h-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z" /></svg>
              <span className="sr-only">Telegram page</span>
            </a>
        </li>
        <li>
          {isConnected ? (
            <div className="pixel4 sm:pixel3 md:pixel2 md:text-5xl">
              <p>Connected</p>
            </div>
          ) : (
            <div className="pixel4 sm:pixel3 md:pixel2 md:text-5xl">
              <p onClick={connectAccount}>Connect Wallet</p>
            </div>
          )}
        </li>
      </ul>
    </div>
  </div>
</nav>


  )
}

export default NavBar
