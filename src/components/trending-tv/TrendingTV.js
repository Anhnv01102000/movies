import React, { useEffect, useState } from "react";

import './trending-tv.scss'

import SwiperCore, { Autoplay } from "swiper";
import { SwiperSlide, Swiper } from 'swiper/react';

import MovieCard from "../movie-card/MovieCard";

import { tvType, category, getTVType } from "../../api/tmdbApi";

const TrendingTV = props => {

    SwiperCore.use([Autoplay])


    const [items, setItems] = useState([])

    useEffect(() => {
        tvTreding()
    }, [])

    const tvTreding = async () => {
        let res = await getTVType(tvType.popular)
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
                            <MovieCard category={category.tv} item={item} key={index} />
                        </SwiperSlide>
                    ))
                }
            </Swiper >

        </div >
    )
}

export default TrendingTV