import React from 'react'

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className='w-full relative bottom-0 py-16 flex items-center align-middle justify-center hover:cursor-default'>
        <p className='text-sm text-gray-500'>@{year} Copyright free</p>
    </footer>
  )
}
