const API_key = '64f981a821c649fa9478b0b2ec689144'
const requests = {
    fetchTrending:`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_key}`,
    fetchTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}&language=en-US&page=1`,
    fetchAllmovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchTvshows:`https://api.themoviedb.org/3/discover/tv?api_key=${API_key}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`,
    fetchActionmovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchComedymovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrormovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomancemovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentariesmovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}&with_genres=99`,


}    

export default requests