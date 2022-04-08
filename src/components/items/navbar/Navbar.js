import React from 'react'
import './navbar.css'
const Navbar = ({sethandleshow})=> {
    React.useEffect(()=>{
        window.addEventListener('scroll',()=>{       //adds the listner
            if (window.scrollY > 100) {
                sethandleshow(true)
            }else{
                sethandleshow(false)
            }
        })

        return ()=>{
            window.removeEventListener('scroll')     //removes the listner
         }
    },[])

    return (
        <div className="navbar__container">
            <div className="navbar__logo">
                <img src="https://fthmb.tqn.com/trQ-1qKt2E86qFh6TNeVwX_BZP4=/768x0/filters:no_upscale()/Netflix_2014_logo.svg-57f7c9ca5f9b586c355f5904.png"
                    alt="logo"
                />
            </div>
            <div className="navbar__btns">
                <img src="https://th.bing.com/th/id/R.2483ccb6b5edeb29c6fcd00e9ad1a6b3?rik=Q4WFhQGPZLHxKw&riu=http%3a%2f%2fblogs.studentlife.utoronto.ca%2flifeatuoft%2ffiles%2f2015%2f02%2fFullSizeRender.jpg&ehk=1rcUA0Bsl0EVLugfIDj3%2f2CF4FPQ4xx%2bfEj1bPIVCsI%3d&risl=&pid=ImgRaw&r=0"
                alt="smily logo"/>
            </div>
        </div>
    )
}

export default Navbar
