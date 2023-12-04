import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import PreviewListing from "../components/PreviewListing";
import axios from  "axios";
import { useEffect, useState } from 'react'
import {toast, Toaster} from "react-hot-toast"
import {useDispatch,useSelector} from "react-redux";
import {addPost,emptyPost,addPage} from "../Redux/GlobalPostSlice";
import ReactLoading from "react-loading";

export default function View() {
  const [disableLoad,setDisableLoad] = useState(false);
  const {array:globalPost,page} = useSelector(state => state.globalPost);
  const dispatch = useDispatch();

    const handleFectchListing = async() =>{
      try{
        const allListing = await axios.get("/allListing");
        if(allListing.data){
            await dispatch(addPage({page:10}));
            await dispatch(addPost({array:allListing.data}))
        }
        if(!allListing.data){
            await dispatch(emptyPost());
        }
      }
      catch(e){
        toast.error('Error loading data');
      }  
    }

    const loadMore = async () => {
      try {
        setDisableLoad(true);
        const allListing = await axios.post("/loadmore", { load: page });
        if (allListing.data.length !== 0) {
          await dispatch(addPage({page:10}));
          await dispatch(addPost({ array: allListing.data }));
        } else {
          toast.error("No more post to load");
        }
      } catch (error) {
        console.error("Error loading more post:", error);
        toast.error("Error loading more post");
      }
      setDisableLoad(false);
    };
    

    useEffect(() =>{
      if(!globalPost.length){
        handleFectchListing();
      }
    },[])


  return (
    <div className="bg-snow-100">
        <div className="flex flex-col"> 
          <Header/>
          <Toaster />
            <div className="flex w-full flex-col items-center justify-center my-8 px-8">
              <p className="text-2xl md:text-4xl my-4 font-semibold">Yuma Listings</p>
              <div className="w-full items-center flex flex-col">  
                {globalPost?.length > 0 ?
                <>
                    {globalPost?.map((x,index) =>{
                        return <PreviewListing key={index} {...x}  />
                    })}
                </>
                : 
                <div className="w-full flex items-center justify-center h-full flex-col">
                    <ReactLoading  type={'bubbles'} color="#60a5fa" width={"20%"} height={"20%"}/>
                    <p className="text-2xl font-thin">Loading Post...</p>
                </div>
                }
              </div>
            </div>

             {(globalPost?.length !== 0 && globalPost?.length >= 10 && !disableLoad ) &&
             
              <div className="w-full flex justify-center gap-4" onClick={disableLoad ? null : ()=>loadMore()}>
                <div className="w-72 p-2 rounded-lg flex items-center justify-center gap-4 hover:bg-blue-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  <label>{disableLoad ? "Loading" : "Load more post ..."}</label>
                </div>
              </div>
            }   
            <Footer/>
        </div>
    </div>
  )
}
