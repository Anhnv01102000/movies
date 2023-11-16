import axios from "axios";


const apiKey = "dd5d253af859f054ee2adde6ce522651";
const originalImage = (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`
const w500Image = (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`

export const category = {
    movie: 'movie',
    tv: 'tv'
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated'
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air'
}

const getVideos = (category, id) => {
    return axios.get(`https://api.themoviedb.org/3/${category}/${id}/videos?api_key=${apiKey}&language=en-US`)
}

const getMovieType = (movieType, page) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${movieType}?api_key=${apiKey}&language=en-US`)
}

const getTVType = (tvType, page) => {
    return axios.get(`https://api.themoviedb.org/3/tv/${tvType}?api_key=${apiKey}&language=en-US`)
}

const search = (category, page, keyword) => {
    return axios.get(`https://api.themoviedb.org/3/search/${category}?api_key=${apiKey}&language=en-US&page=${page}&include_adult=false&query=${keyword}`)
}

const getDetail = (category, id) => {
    return axios.get(`https://api.themoviedb.org/3/${category}/${id}?api_key=${apiKey}`)
}

const getCredits = (category, id) => {
    return axios.get(`https://api.themoviedb.org/3/${category}/${id}/credits?api_key=${apiKey}&language=en-US`)
}

const getSimilar = (category, id) => {
    return axios.get(`https://api.themoviedb.org/3/${category}/${id}/similar?api_key=${apiKey}&language=en-US&page=1`)
}
export { w500Image, originalImage, getVideos, getMovieType, getTVType, search, getDetail, getCredits, getSimilar }