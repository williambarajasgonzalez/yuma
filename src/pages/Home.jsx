import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Yuma from "../Images/yuma.png";


export default function Home() {
  return (
    <div className="bg-gray-100">
        <Header/>
        <div className='flex flex-col p-6 gap-7 items-center w-full my-28 hover:cursor-default'>
          <img src={Yuma} className="absolute w-full h-ful opacity-20 top-24"/>
            <p className="font-medium text-2xl ">Welcome to Yuma Grand Exchange – Your Local Business Hub!</p>
            <p className="font-medium">We believe in fostering a thriving community by providing a platform where businesses can connect, grow, and succeed. Here's what sets us apart</p>

            <ul>
                <li className="p-4"><strong>Copyright-Free Platform:</strong> All content on this website is copyright-free. You retain ownership of your listings, and others are free to view and share them.</li>
                <li className="p-4"><strong>Free to Post:</strong> We encourage you to showcase your business with us at no cost. Post your listings, promote your products, and reach a wider audience without any fees.</li>
                <li className="p-4"><strong>Free to View:</strong> Access a wealth of local businesses and opportunities without any subscription fees. Browse listings, discover new ventures, and support your community effortlessly.</li>
                <li className="p-4"><strong>No account Required:</strong> Experience a secure website without the hassle of creating an account. Post and view listings effortlessly.</li>
                <li className="p-4"><strong>Mobile and Tablet Friendly:</strong> Enjoy seamless access to the website on your favorite devices, whether it's a mobile phone or tablet.</li>
            </ul>

            <p className="font-medium">... Join our community today and explore the possibilities!</p>
        </div>
        <Footer/>
    </div>
  )
}
