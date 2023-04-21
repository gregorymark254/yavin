import React, { useState }  from 'react'

const Nav = () => {

  const [navIsShown, setnavIsShown] = useState(false);
  const toggleNavIsShown = () => {
    setnavIsShown((navIsShown) => !navIsShown);
  };

  return (
    <main id="nav">
      <div className="container mx-auto p-4">
        <nav className="flex flex-wrap items-center justify-between md:justify-around">
          <div className="px-3 py-2">
            <img className="w-32" src="https://htmlrev.com/preview/yavin/images/logo.svg" alt="Logo" />
          </div>
          <div className="hidden md:flex lg:flex">
            <ul className="flex">
              <li className="px-3 py-2 hover:text-[#5e87eb]"><a href="#home">Home</a></li>
              <li className="px-3 py-2 hover:text-[#5e87eb]"><a href="#details">Details</a></li>
              <li className="px-3 py-2 hover:text-[#5e87eb]"><a href="#services">Services</a></li>
              <li className="px-3 py-2 hover:text-[#5e87eb]"><a href="#projects">Projects</a></li>
              <li className="px-8 py-2 border border-[#cc2973]  text-[#cc2973] rounded-full hover:text-white hover:bg-[#cc2973]"><a href="#contact">Contact us</a> </li>
            </ul>
          </div>

          {!navIsShown ? (
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-6 h-6 md:hidden' onClick={toggleNavIsShown} >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-7 h-7 z-50' onClick={toggleNavIsShown} >
              <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
            </svg>
          )}

          {navIsShown && (
            <div className='absolute z-10 top-12 left-0 w-full text-black'>
              <ul className='mb-2 bg-white p-2 mx-10'>
                <li className="px-3 py-2 hover:text-[#5e87eb] border-b border-t border-slate-300"><a href="#home">Home</a></li>
                <li className="px-3 py-2 hover:text-[#5e87eb] border-b border-slate-300"><a href="#details">Details</a></li>
                <li className="px-3 py-2 hover:text-[#5e87eb] border-b border-slate-300"><a href="#services">Services</a></li>
                <li className="px-3 py-2 hover:text-[#5e87eb] border-b border-slate-300"><a href="#projects">Projects</a></li>
                <li className="px-3 py-2 hover:text-[#5e87eb]"><a href="#contact">Contact us</a></li>
              </ul>
            </div>
          )}
        </nav>
      </div>
    </main>
  )
}

export default Nav
