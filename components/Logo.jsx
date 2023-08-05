import React from 'react'
import Link from 'next/link';

const Logo = () => {
  return (
    <div className='py-4 bg-bossanova'>
        <Link href="/"><h1 className='font-bold text-3xl italic pl-10 text-white-lilac'>ScamChecker</h1></Link>
    </div>
    
  )
}

export default Logo