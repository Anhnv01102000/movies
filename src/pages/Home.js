import React from "react";

import { Link } from "react-router-dom";

import HeroSlide from "../components/hero-slide/HeroSlide";
import TrendingMovie from "../components/trending-movie/TrendingMovie";
import TopRatedMovie from "../components/top-rated-movie/TopRatedMovie";
import TrendingTV from "../components/trending-tv/TrendingTV";
import TopRatedTV from "../components/top-rated-tv/TopRatedTV";




import './home.scss'


const Home = () => {
    return (
        <>
            <HeroSlide />
            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending Movies</h2>
                        <Link to="/movie">
                            <button className="button">View more</button>
                        </Link>
                    </div>
                    <TrendingMovie />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <button className="button">View more</button>
                        </Link>
                    </div>
                    <TopRatedMovie />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Trending TV</h2>
                        <Link to="/tv">
                            <button className="button">View more</button>
                        </Link>
                    </div>
                    <TrendingTV />
                </div>
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV</h2>
                        <Link to="/tv">
                            <button className="button">View more</button>
                        </Link>
                    </div>
                    <TopRatedTV />
                </div>


            </div>
        </>
    )
}

export default Home