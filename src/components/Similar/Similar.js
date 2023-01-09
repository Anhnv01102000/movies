import React, { useEffect, useState } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Link } from 'react-router-dom';

import { category, getSimilar } from "../../api/tmdbApi";
import MovieCard from "../movie-card/MovieCard";

const Similar = props => {

    SwiperCore.use([Autoplay])

    const [items, setItems] = useState([])

    useEffect(() => {
        const category = props.category
        const similar = async () => {
            let res = await getSimilar(category, props.id)
            if (res && res.data) {
                setItems(res.data.results)
            }
            // console.log("Check res: ", res)
        }

        similar()
    }, [category, props.id])


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
                            <MovieCard category={props.category} item={item} />
                        </SwiperSlide>
                    ))
                }
            </Swiper >

        </div >
    )
}

export default Similar