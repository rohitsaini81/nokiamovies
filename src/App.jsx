import React,{useEffect, useState } from 'react';
import './App.css'
// khach started
import ItemList from "./newcomp/Item"
import AtomicSpinner from 'atomic-spinner'
import Details from './components/Details'
import Error from './components/Error'
import Nav,{Home} from './Nav'
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import { flexbox } from '@chakra-ui/react';

const url="http://13.60.74.121:3001/api/movies"
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url,{timeout: 50000 })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []);
    if (!data) {
      return <div><AtomicSpinner /><br/>Loading...</div>;
    }
  return (
    <>
  <BrowserRouter className={flexbox}>
  <Nav />
  
      <Routes>
    <Route path="/" element={<Home data={data}/>} />
     <Route path='/details/:id' element ={<Details />} />
     <Route path="/details/*" element={<Details />} />
     <Route path="/pre/" element={<ItemList />} />

        <Route path="*" element={<Error />} />

      </Routes>
      <Footer />
    </BrowserRouter>

    </>
  )


}

export default App
