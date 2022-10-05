import './App.css';
import Home from './pages/Home/Home';
import Project from './pages/Projects/Project';
import React from 'react';
import Resume from './pages/Resume/Resume'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import { Routes, Route } from 'react-router-dom'
import Blog from './pages/Blogs/Blog';
import BlogContent from './pages/BlogContent/BlogContent';
function App() {
  return (
    <div className='App'>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/about' element={<About/>}  />
            <Route path='/project' element={<Project/>}  />
            <Route path='/resume' element={<Resume/>}  />
            <Route path='/contact' element={<Contact/>}  />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/content' element={<BlogContent/>} />
        </Routes>
    </div>
  );
}

export default App;
