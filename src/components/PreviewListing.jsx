import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function PreviewListing(props) {
    const {title,contactName,mobileNumber,email,category,description,images,_id} = props;
    const navigate = useNavigate();
    const handleViewParams = () =>{
        navigate(`/view/${_id}`);
    }

  return (
    <div id={_id} onClick={handleViewParams} className="flex-col md:flex-row justify-center p-8 flex gap-6 bg-sky-100 my-2 rounded-lg shadow-lg hover:bg-gray-200 hover:cursor-pointer w-full items-center">
        <div className="flex flex-col gap-6 text-center w-96 mx-8  h-full">
            <label className="font-bold  border-black md:text-4xl text-xl">Title</label>
            <p className="text-xl md:text-2xl">{title}</p>
            <label className="font-bold text-xl border-black md:text-4xl">Category</label>
            <p className="md:text-2xl text-xl">{category}</p>
        </div>
        
        <div className="flex flex-col gap-4 w-full  text-center">
            <label className="font-bold  border-black md:text-4xl">Description</label>
            <p className="border-2 w-full h-full bg-white border-lg text-sm p-8">{description.substring(0,100)+"..."}</p>
            {images?.length != 0 &&
            <div className="flex items-center justify-center w-full gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
                <label className="md:text-2xl text-xl">Click to view pictures</label>
            </div>
            
            }
            <div className="flex gap-2 flex-wrap justify-center">
                    {images?.map((x,index)=>{
                        return <img key={index} src={x} className="w-28 h-28" />
                    })}
            </div>
        </div>
        
    </div>
  )
}
