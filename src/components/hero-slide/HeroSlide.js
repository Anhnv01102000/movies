import React, { useNavigate, useEffect, useState } from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import 'swiper/css';

import { getMovieType, movieType } from '../../api/tmdbApi'

import HeroSlideItem from "./HeroSlideItem";
import { TrailerModal } from "./HeroSlideItem"
import './hero-slide.scss'

const HeroSlide = () => {

    SwiperCore.use([Autoplay])

    const [movieItems, setMovieItems] = useState([])

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = async () => {
        let res = await getMovieType(movieType.popular)
        if (res && res.data) {
            setMovieItems(res.data.results.slice(10, 15))
        }
        // console.log("Check res: ", res)
    }


    return (
        <div className="hero-slide">
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 5000 }}
            >
                {
                    movieItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            {/* <Link to={'/movie/' + item.id}> */}
                            {({ isActive }) => (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                            {/* <HeroSlideItem item={item} className="active" /> */}
                            {/* <img src={originalImage(item.backdrop_path)} /> */}
                            {/* </Link> */}
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            {
                movieItems.map((item, i) => <TrailerModal key={i} item={item} />)
            }
        </div >
    )
}




export default HeroSlide