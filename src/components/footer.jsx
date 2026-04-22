import React from 'react'

const footer = () => {
  return (
    <footer className="mt-14 border-t border-white bg-white/100 px-2 py-2 overflow-x-hidden">
      <p className="text-center text-[10px] sm:text-[12px] md:text-[26px] text-black font-semibold break-words">
        <a href="mailto:designbykarthik@gmail.com">
          E-mail : designbykarthik@gmail.com
        </a>
        <span className="mx-3 opacity-60">|</span>
        <a href="tel:+919381726944">
          Phone Number : 9381726944
        </a>
      </p>
      <p className="mt-2 text-center text-[10px] sm:text-[12px] md:text-[14px] text-black">
        Copyright © {new Date().getFullYear()} Karthik. All rights reserved.
      </p>
    </footer>
  )
}

export default footer