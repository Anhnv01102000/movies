import axios from "axios";

const apiKey = "dd5d253af859f054ee2adde6ce522651";
const originalImage = (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`
const w500Image = (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`

const getMoviePopular = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
}

const getMovieTopRated = () => {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
}

const getTVPopular = () => {
    return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=1`)
}

const getTVTopRated = () => {
    return axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&language=en-US&page=1`)
}
const getVideos = (movie_id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${apiKey}&language=en-US`)
}

export { w500Image, originalImage, getMoviePopular, getMovieTopRated, getTVPopular, getTVTopRated, getVideos }