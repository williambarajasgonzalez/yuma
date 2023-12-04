import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import View from "./pages/View";
import Post from "./pages/Post";
import axios from "axios";
import ViewPost from './pages/ViewPost';

axios.defaults.baseURL = "http://70.93.18.122:3000";
axios.defaults.withCredentials = true;


function App() {

  return (
    <Routes>
      <Route index  element={<Home />}/>
      <Route path="/view" element={<View />}/>
      <Route path="/view/:id" element = {<ViewPost />}/>
      <Route path="/post" element={<Post />}/>
      <Route path="*" element ={<h1>Route not found</h1>}/>
    </Routes>
  )
}

export default App
