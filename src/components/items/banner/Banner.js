import axios from 'axios'
import React from 'react'
import requests from '../request/request'
import './banner.css'
const Banner=()=> {
    const baseURL = 'https://image.tmdb.org/t/p/original/'
    const[movie,setmovie] = React.useState([]) // random movie

    React.useEffect(()=>{
        const fetchSolomovie = async()=>{
            const result = await axios.get(requests.fetchTrending)
            setmovie(result?.data?.results[Math.floor(Math.random() * result?.data?.results.length - 1)])
        }
        fetchSolomovie()
    },[])

    return (
        <div className="banner__container" style={{backgroundImage:`url(${baseURL}${movie?.backdrop_path})`,backgroundSize:"cover",backgroundPosition:"top center"}}>
            <div className="banner__contents">
                <h2>{movie?.title || movie?.name ||movie?.original_name}</h2>
                <div className="banner__btn">
                    <button className="banner__buttons">Play</button>
                    <button className="banner__buttons">Add</button>
                </div>
                <h3 className="banner__disc">{movie?.overview}</h3>
            </div>
            <div className="faded__bottom"></div>
        </div>
    )
}

export default Banner
