import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PostListing from '../components/PostListing'

export default function Post() {
  return (
    <div>
        <div className="flex flex-col"> 
            <Header/>
            <PostListing/>
            <Footer/>
        </div>
    </div>
  )
}
