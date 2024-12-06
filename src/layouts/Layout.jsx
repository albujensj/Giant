import React from 'react'
import { Outlet } from 'react-router-dom';
import {Menu }from '../componentes/Menu'
import Footer from '../componentes/Footer'
import Header from '../componentes/Header'


export const Layout = () => {
    return (
        <div className='container-fluid p-0'>
            <Menu/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;