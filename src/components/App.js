import React from 'react'
import axios from 'axios'
import requests from './items/request/request'
import '../style/style.css'
import Rows from './items/slider/Rows'
import Banner from './items/banner/Banner'
import Navbar from './items/navbar/Navbar'
const App= ()=> {
    const[handleshow,sethandleshow] = React.useState(false)

    return (
        <div className="app__contsianer" >
            <div className={handleshow?"app__navbarshow":"app__navbarhide"}>
                <Navbar sethandleshow={sethandleshow}/>
            </div>
            <div className="app__banner">
                <Banner/>
            </div>
            <div className="app__rows">
                <Rows title="Trending now" fetchurl={requests.fetchTrending} />
                <Rows title="Top Action" fetchurl={requests.fetchActionmovies} />
                <Rows title="Top Horror" fetchurl={requests.fetchHorrormovies} />
                <Rows title="Top Romance" fetchurl={requests.fetchRomancemovies} />
                <Rows title="Documentaries" fetchurl={requests.fetchDocumentariesmovies} />
                <Rows title="TV Shows" fetchurl={requests.fetchTvshows} />
                
                

            </div>
        </div>
    )
}

export default App



           {/* hide and show newvar */}
           {/* header movie banner(trending shows) */}
           {/* slider with netflix originals */}
           {/* slider with trending shows */}
           {/* slider with action movies */}
           {/* slider with comedy movies */}
           {/* slider with horror movies */}
           {/* slider with romance movies */}
           {/* slider with documentries movies */}
