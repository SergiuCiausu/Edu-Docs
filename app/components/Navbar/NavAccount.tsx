import Link from 'next/link'
import React from 'react'
import "./navbar.css"

const NavAccount = () => {
  return (
    <div
        className="flex items-center gap-4">
        <Link href="/cont-nou" className="creeaza-cont-btn px-8 py-3 rounded-2xl">Creează cont</Link>
        <Link href="/login" className="login-btn px-8 py-3 rounded-2xl">Loghează-te</Link>
    </div>
  )
}

export default NavAccount