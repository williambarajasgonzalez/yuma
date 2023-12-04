import React from 'react';
import { useEffect , useState } from 'react';;
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import axios from "axios";
import ReactLoading from "react-loading";
import ViewPostParams from '../components/ViewPostParams';


export default function ViewPost() {
    const {id} = useParams();
    const [post,setPost] = useState([]);

    const getPost = async() =>{
        const post = await axios.get("/post/"+id);
        if(post.data){
            setPost(post.data);
        }
    }

    useEffect(() =>{
        getPost();
    },[])

  return (
    <div>
        <div className="flex flex-col"> 
            <Header/>
                <div className="flex w-full justify-center items-center py-8 px-4">
                    {post.length == 0 
                    ?
                    <ReactLoading  type={'bubbles'} color="#60a5fa" width={"20%"} height={"20%"} />
                    
                    :
                    <ViewPostParams key={id} {...post}/>
                    }
                </div>
            <Footer/>
        </div>
    </div>
  )
}
