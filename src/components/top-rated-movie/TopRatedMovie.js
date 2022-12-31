import React, { useEffect, useState } from "react";

import './top-rated-movie.scss'

import SwiperCore, { Autoplay } from "swiper";
import { SwiperSlide, Swiper } from 'swiper/react';
import MovieCard from "../movie-card/MovieCard";


import { movieType, category, getMovieType } from "../../api/tmdbApi";

const TopRatedMovie = props => {

    SwiperCore.use([Autoplay])

    const [items, setItems] = useState([])

    useEffect(() => {
        topRatedMovie()
    }, [])

    const topRatedMovie = async () => {
        let res = await getMovieType(movieType.top_rated)
        if (res && res.data) {
            setItems(res.data.results)
        }
        // console.log("Check res: ", res)
    }

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={true}
                spaceBetween={1}
                slidesPerView={'auto'}
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide className="slide-movie" key={index}>
                            <MovieCard category={category.movie} item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper >

        </div >
    )
}

export default TopRatedMovie