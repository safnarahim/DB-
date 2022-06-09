import React from 'react'
import{BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Signup from './Signup'

export default function RouterPage()
{

    return(

        <div>
<Router>

    <Routes>

<Route path="/" element={<Home/>}exact />
<Route path="/Signup" element={<Signup/>} />

    </Routes>

</Router>

        </div>
    )
}