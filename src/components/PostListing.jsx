import React from 'react'
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import FileBase64 from 'react-file-base64';
import { useState } from 'react';
import {toast ,Toaster} from "react-hot-toast";
import axios from "axios";
import ReactLoading from "react-loading";
import {postSchema} from "../DataValidation/Validation";
import Error from './Error';


export default function PostListing() {
    const [imgSource,setImgSource] = useState([]);
    const [errors,setErrors] = useState([]);
    const [postState, setPostState] = useState({
        title: "",
        contactName: "",
        mobileNumber: "",
        email: "",
        category: "",
        description: "",
        images: [],
      });
      const [loading,setLoading] = useState(false);


    const handlePost = async() =>{
        try{
            setLoading(true);
            await postSchema.validate(postState, { abortEarly: false });
            const postAxios = await axios.post("/post",postState);
            if(postAxios.data.success){
                setPostState({
                    title: "",
                    contactName: "",
                    mobileNumber: "",
                    email: "",
                    category: "",
                    description: "",
                    images: [],
                });
                setImgSource([]);
                setLoading(false);
                return toast.success("Post has been Submitted");
            }
            if(postAxios.data.error){
                setLoading(false);
                return toast.error(postAxios.data.error);
            }
        }
        catch(ValidationError){
            const errorMessages = ValidationError.inner.map((error) => error.message);
            setErrors(errorMessages);
            setLoading(false);
        }
        
    }

  return (
    <div className="flex gap-14 justify-center items-center flex-col md:flex-row py-8 w-full">
        <Toaster/>
        <div className="flex flex-col w-96 gap-2 px-8">
            <div className="w-full">
                {errors?.length !== 0 && (
                    errors.map((err,index) =>{
                        return <Error key={index} error={err} />
                    })
                )}
            </div>
            
            <TextField value={postState.title} onChange={ e => setPostState(old => ({ ...old, title: e.target.value }))} className='w-full' id="standard-basic" label="Title" variant="standard" />
            <TextField value={postState.contactName} onChange={ e => setPostState(old => ({ ...old, contactName: e.target.value }))} className='w-full' id="standard-basic" label="Contact Name" variant="standard" />
            <TextField value={postState.mobileNumber} onChange={ e => setPostState(old => ({ ...old, mobileNumber: e.target.value }))} className='w-full' id="standard-basic" label="Contact Mobile Number" variant="standard" />
            <TextField value={postState.email} onChange={ e => setPostState(old => ({ ...old, email: e.target.value }))} className='w-full' id="standard-basic" label="Contact Email" variant="standard" />
            <label className='my-4 text-gray-500'>Category</label>
            <input value={postState.category} onChange={ e => setPostState(old => ({ ...old, category: e.target.value }))} className='border-2 p-1 border-gray-500' list="category"/>
            <datalist id="category">
                <option value="Technology and Software"></option>
                <option value="Healthcare and Wellness"></option>
                <option value="Food and Beverage"></option>
                <option value="Retail and Shopping"></option>
                <option value="Finance and Banking"></option>
                <option value="Real Estate and Construction"></option>
                <option value="Travel and Tourism"></option>
                <option value="Education and Training"></option>
                <option value="Professional Services (Legal, Accounting, Consulting)"></option>
                <option value="Automotive"></option>
                <option value="Arts and Crafts"></option>
                <option value="Beauty and Personal Care"></option>
                <option value="Home and Garden"></option>
                <option value="Nonprofit and Social Services"></option>
                <option value="Conferences and Conventions"></option>
                <option value="Workshops and Seminars"></option>
                <option value="Concerts and Music Events"></option>
                <option value="Festivals and Fairs"></option>
                <option value="Sports and Fitness Events"></option>
                <option value="Networking and Meetups"></option>
                <option value="Arts and Culture Events"></option>
                <option value="Charity and Fundraising Events"></option>
                <option value="Business Expos and Trade Shows"></option>
                <option value="Comedy Shows and Performances"></option>
                <option value="Educational and Academic Events"></option>
                <option value="Religious and Spiritual Events"></option>
                <option value="Family and Kids Events"></option>
                <option value="Technology and Innovation Events"></option>
                <option value="Food and Drink Events"></option>
            </datalist>

            <TextareaAutosize value={postState.description} onChange={ e => setPostState(old => ({ ...old, description: e.target.value }))} className="border-2 border-gray-500 p-2"  aria-label="minimum height" minRows={10} placeholder="Type your description...."/>
            <div className="w-full flex justify-end items-center text-sm">
                {postState.description.length < 450 ?
                    <label className="text-green-500">{`${postState.description.length} of 450`}</label>
                    :
                    <label className="text-red-500">{`${postState.description.length} of 450`}</label>
                }
                
            </div>
            
            
        
        </div>
        
        <div className="flex flex-col items-center max-w-custom gap-8">
            
            <div className="flex flex-col gap-4">
                <div className="flex gap-4 align-middle items-center w-full my-4 p-2 border-b-2 border-blue-300">
                    <label className="font-bold">Add images</label>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-14">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </div>
             
                <div className="my-4 p-8 bg-sky-200 rounded-lg shadow-lg">
                    <FileBase64
                        multiple={true}
                        onDone={(files) => {
                            // Filter out non-image files
                            const imageFiles = files.filter((file) => {
                                if (file.type.includes("image")) {
                                    return true;
                                } else {
                                    toast.error("No videos allowed");
                                    return false;
                                }
                            });

                            if (imageFiles.length <= 12) {
                                // Filter out files exceeding 2MB in size
                                const validSizeFiles = imageFiles.filter(
                                    (file) => parseFloat(file.size.split(" ")[0]) <= 2000
                                );

                                if (imageFiles.length !== validSizeFiles.length) {
                                    toast.error(
                                        "Not all your photos were added, the limit is 2mb each photo",
                                        { duration: 6000 }
                                    );
                                } else {
                                    toast.success("Pictures loaded successfully");
                                }

                                const base64Images = validSizeFiles.map((file) => file.base64);

                                setImgSource(validSizeFiles);
                                setPostState((old) => ({ ...old, images: base64Images }));
                            } else {
                                setImgSource();
                                toast.error("No more than 12 pictures");
                            }
                        }}
                    />
                </div>
                
            </div>
            
            <div className="hidden md:flex flex flex-wrap gap-4">
                {imgSource?.length !== 0 && 
                    imgSource?.map((x,index)=>{
                        return(
                            <img key={index} className="w-16 h-14 lg:w-36 lg:h-28  shadow-2xl" src={x.base64} />
                        );
                    })
                }
            </div>

            {!loading ? <button onClick={handlePost} className="py-4 px-6 my-16 rounded-full text-sky-800 border-2 border-sky-700 hover:bg-sky-500 hover:text-white font-medium ">Submit Posting</button> : 
            <div className="w-full flex justify-center">
                <ReactLoading  type={'cylon'} color="#60a5fa" width={"20%"}/>
            </div>
            }
            
        </div>
        
    </div>
  )
}
