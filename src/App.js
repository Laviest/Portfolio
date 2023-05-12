import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'

export default function App() {
    return(
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </div>
    )
}