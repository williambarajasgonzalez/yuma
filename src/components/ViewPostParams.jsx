import React from 'react';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function ViewPostParams(props) {
    const {title,contactName,mobileNumber,email,category,description,images} = props;
    const [preview,setPreview] = useState("");
    const [index,setIndex] = useState(0);
    const navigate = useNavigate();

    const exitPreview = (x,index) =>{
        if(x){
            setIndex(index);
            console.log(index);
            setPreview(x);
            window.scrollTo(0,0);
        }else{
            setPreview("");
        }
    }

    const arrayBack = () =>{
        let where = index -1;
        const max = images.length-1;
        if(index <= 0 ){
            where = max;
        }
        setIndex(where);
        setPreview(images[where]);
    }

    const arrayUp = () =>{
        let where = index + 1;
        const max = images.length-1;
        if(index >= max ){
            where = 0;
        }
        setIndex(where);
        setPreview(images[where]);
    }

    const navigateHome = () =>{
        navigate("/view");
    }


  return (
    <>
    {preview == "" ?

    <div className="flex items-center justify-center w-full flex-col gap-8">
        <div className="w-full flex justify-center bg-blue-200 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20  h-12 hover:bg-blue-400 rounded-lg" onClick={()=>navigateHome()}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>

        </div>

        <p className="text-blue-700 font-extrabold text-4xl py-8 border-b-4 border-blue-500">{title}</p>
        <table>
            <tr className="bg-blue-200 text-center font-medium">
                <td className="p-4 md:text-2xl">Contact Name</td>
                <td className="p-4 md:text-2xl">Mobile Number</td>
                <td className="p-4 md:text-2xl"> Email</td>
            </tr>
            <tr className="text-center border-2">
                <td className="p-4 md:text-2xl">{contactName}</td>
                <td className="p-4 md:text-2xl">{mobileNumber}</td>
                <td className="p-4 md:text-2xl">{email} </td>
            </tr>
        </table>

        <p className="text-gray-600 py-8 md:text-2xl"><label className="border-b-4 tracking-widest px-6 mx-2 md:text-2xl">Category </label>{category}</p>
        <div className="border-t-4 border-gray-400 border-dotted w-full"></div>
        <label className="text-4xl text-blue-500 font-extrabold ">Description</label>
        <p className="max-w-custom2 bg-blue-200 rounded-lg py-8 px-6 font-medium tracking-widest md:text-xl">{description}</p>
        <div className="border-t-4 border-gray-400 border-dotted w-full mt-8"></div>
        <div className="w-full flex flex-wrap justify-center gap-6">
            {images?.map((x,index) =>{
                return <img onClick={(e)=>exitPreview(x,index)} className="max-w-custom2 py-8 px-4 shadow-lg hover:bg-blue-50 hover:cursor-pointer" key={index} src={x} />
            })}
        </div>

        <div className="w-full flex justify-center bg-blue-200 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20  h-12 hover:bg-blue-400 rounded-lg" onClick={()=>navigateHome()}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
        </svg>

        </div>


    </div>
    
    :
    <div className="w-full p-4 justify-center items-center flex flex-col h-full">
        <div className="w-full justify-center items-center flex flex-col">
            <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>exitPreview()} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 bg-gray-300 hover:bg-blue-200 rounded-lg mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>

            <img onClick={()=>exitPreview()} className="w-full md:max-w-custom2 shadow-lg hover:cursor-pointer hover:bg-blue-50" src={preview} />
        </div>
       

        <div className="flex sm:absolute w-full justify-between p-2 my-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20  h-12 hover:bg-blue-200 rounded-lg bg-gray-300" onClick={()=>arrayBack()}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-12 hover:bg-blue-200 rounded-lg bg-gray-300" onClick={()=>arrayUp()}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

        </div>

    </div>

    }
    </>
  )
}

