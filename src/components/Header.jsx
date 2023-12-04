import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../Images/logo.png";
import Links from './Links';

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className='w-full align-middle text-center flex justify-evenly bg-sky-100 p-4 items-center'>
            <img onClick={()=>navigate("/")} className='hidden md:block w-24 hover:shadow-2xl' src={logo} />
            <label className='hidden md:block w-38 text-gray-700 text-lg font-bold tracking-widest'>Yuma Grand Exchange</label>
            <Links/>
    </header>
  )
}
