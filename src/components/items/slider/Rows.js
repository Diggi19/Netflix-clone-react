import axios from 'axios'
import React from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'  
import './row.css'
const Rows = ({title,imageurl,fetchurl})=> {
    const[movies,setmovies] = React.useState([])
    const baseURL = 'https://image.tmdb.org/t/p/original/'
    const[toggle,settoggle] = React.useState(false)
    const[trailer,settrailer] = React.useState('')
    
    const options = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
            
        }
    }

    const selectTrailer = (movie)=>{
        movieTrailer(movie?.title || movie?.name)
            .then((url)=>{
                const urlparams = new URLSearchParams(new URL(url).search)   // this will set the obtained url ready to search
                settrailer(urlparams.get('v'))  // this will return only the value of param v
            })
            .catch(err=>console.log(err))
    }
    console.log(trailer)
    React.useEffect(()=>{
        const fetchmovies = async()=>{
            const result = await axios.get(fetchurl)
            setmovies(result?.data?.results)
            return result
        }

        

        fetchmovies()
        console.log(movies)
    },[fetchurl]) // tells usereffect that this variable(fetchurl) is from outside of the box
    
    return (
        <div className="row__conatiner">
            <div className="row__title">{title}</div>
            <div className="row__slider">
                {/* <div className="row__movies"><img src={imageurl} alt="poster"/></div> */}
                {movies.map((movie,i)=>{
                    return(
                        <div key={i} onClick={()=>{settoggle(!toggle);selectTrailer(movie)}} className="row__movies"><img className="row__img" src={`${baseURL}${movie.poster_path}`} alt={movie.title}/></div>
                        
                    )
                })}

            </div>
            <YouTube className={toggle?"Row__playershow":"Row__playerhide"} videoId={toggle? trailer:""}  opts={options}/>
        </div>
    )
}

export default Rows
