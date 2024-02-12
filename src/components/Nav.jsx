import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

const[show,setShow]=useState(false);

useEffect(()=>{
    window.addEventListener("scroll",()=>{
        if(window.scrollY > 600){
            setShow(true)
        }
        else{
            setShow(false)
        }
    })
})
console.log(show)

  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img width={'150px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/2560px-Netflix_2014_logo.svg.png" alt="" />
    </div>
  )
}

export default Nav