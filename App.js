//import {BrowserRouter,Route,Routes}from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Blogs from './BLogs';
import Layout from './LayOut';
import NoPage from './NoPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="blogs" element={<Blogs/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="*" element={<NoPage/>}/>
      </Route>
      </Routes>  
      </BrowserRouter>
  );
}

export default App;