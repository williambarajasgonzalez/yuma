import React from 'react'
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <div className='text-2xl md:text-lg flex align-middle  gap-8'>
        <Link className="border-b-4 border-white hover:border-blue-500 hover:text-blue-500" to="/">Home</Link>
        <Link className="border-b-4 border-white hover:border-blue-500 hover:text-blue-500" to="/view">View Listing</Link>
        <Link className="border-b-4 border-white hover:border-blue-500 hover:text-blue-500" to="/post">Post Listing</Link>
    </div>
  )
}
