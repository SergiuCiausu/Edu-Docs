import React from 'react'
import Image from 'next/image';

const NavBtns = ({ theme, onClick, outOfContentArea }: { theme: string, onClick: () => void, outOfContentArea: boolean }) => {
  return (
    <div
        className="flex items-center gap-4">
        <button className="w-8 h-8 flex items-center justify-center cursor-pointer" onClick={() => theme === "dark" ? onClick("light") : onClick("dark")}><Image src={`/${theme === "dark" ? "dark" : "light"}-mode-active-icon.png`} alt="theme-toggler-icon" width={24} height={24}></Image></button>
        {outOfContentArea ? "" : <button className="w-8 h-8 flex items-center justify-center cursor-pointer"><Image src={`/account-icon-${theme === "dark" ? "dark" : "light"}.png`} alt="account-icon" width={24} height={24}></Image></button>}
    </div>
  )
}

export default NavBtns