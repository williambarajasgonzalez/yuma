import React from 'react'

export default function Error({error}) {
  return (
    <div className="flex w-full align-middle text-sm gap-4">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
         <label className="text-red-700 font-bold">{error}</label>
    </div>
   
  )
}
