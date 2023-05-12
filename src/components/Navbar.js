import React, { useRef, useState, useEffect } from 'react'

export default function Navbar() {
    const burger = useRef()
    const nav = useRef();
    const navLinks = useRef([])
    const navbar = useRef()

    const addToRefs = (el) => {
        if(el && !navLinks.current.includes(el)) {
            navLinks.current.push(el);
        }
    }

    
    const navSlide = () => {
        burger.current.addEventListener('click', () => {
            // Toggle nav
            nav.current.classList.toggle('nav-active');

            // Animate links
            navLinks.current.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = ''
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
                }
            });
            // // Burger animation
            burger.current.classList.toggle('toggle');
        });
    }
    console.log(window.innerWidth)

    if(window.innerWidth >= 720) {
        document.addEventListener('scroll', () => {
            if(window.scrollY > 0) {
                navbar.current.classList.add('scrolled')
                nav.current.classList.add('scrolled-a')
            } else {
                navbar.current.classList.remove('scrolled')
                nav.current.classList.remove('scrolled-a')
            }
        })
    } 


    return (
        <nav ref={navbar} className='navbar'>
            <div className='logo'>
                <h4>PJDev</h4>
            </div>
            <ul ref={nav} className='nav--links'>
                <li ref={addToRefs} onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>Home</li>
                <li ref={addToRefs} onClick={() => {window.scrollTo({top: 800, behavior: "smooth"})}}>About</li>
                <li ref={addToRefs} onClick={() => {window.scrollTo({top: 2100, behavior: "smooth"})}}>Projects</li>
                <li ref={addToRefs} onClick={() => {window.scrollTo({top: 2600, behavior: "smooth"})}}>Contact</li>
            </ul>
            <div ref={burger} className='burger' onClick={navSlide}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    )
}