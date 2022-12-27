import React, { useEffect, useState } from "react";

import './trending-movie.scss'

import SwiperCore, { Autoplay } from "swiper";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

import { getMoviePopular, w500Image } from "../../api/tmdbApi";

const TrendingMovie = props => {

    SwiperCore.use([Autoplay])

    const [moviePopular, setMoviePopular] = useState([])

    useEffect(() => {
        mvPopular()
    }, [])

    const mvPopular = async () => {
        let res = await getMoviePopular()
        if (res && res.data) {
            setMoviePopular(res.data.results)
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
                    moviePopular.map((item, index) => (
                        <SwiperSlide className="slide-movie" key={index}>
                            < Link to={'/movie/' + item.id} className="movie-card">
                                <div className="card-head" >
                                    <img src={w500Image(item.poster_path)} />
                                </div>
                                <h3>{item.title || item.name}</h3>
                            </Link>
                        </SwiperSlide>


                    ))
                }
            </Swiper >

        </div >
    )
}

export default TrendingMovie