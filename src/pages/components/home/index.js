import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div className='btn'>
        this is home page:
        <Link href={'/'}>go to root page</Link>
    </div>
  )
}

export default index