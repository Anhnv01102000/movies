import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './detail.scss'

import { movieType, originalImage, getVideos, getMovieType, getDetail, getSimilar } from '../../api/tmdbApi';

import CastList from './CastList';
import VideoList from './VideoList';
import TrendingMovie from '../../components/trending-movie/TrendingMovie';
import Similar from '../../components/Similar/Similar';


const Detail = () => {

    const { category, id } = useParams();

    const [item, setItem] = useState(null);

    useEffect(() => {
        const detail = async () => {
            let response = await getDetail(category, id);
            setItem(response.data);
            window.scrollTo(0, 0);
            // console.log(response.data);
        }
        detail();
    }, [category, id]);


    return (
        <>
            {
                item && (
                    <>
                        <div
                            className="banner"
                            style=
                            {{
                                backgroundImage: `url(${originalImage(item.backdrop_path || item.poster_path)})`
                            }}>
                        </div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div
                                    className="movie-content__poster__img"
                                    style={{
                                        backgroundImage:
                                            `url(${originalImage(item.poster_path || item.backdrop_path)})`
                                    }}>
                                </div>
                            </div>
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>
                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className="genres__item">{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p className="overview">{item.overview}</p>
                                <div className="cast">
                                    <div className="section__header">
                                        <h2>Casts</h2>
                                    </div>
                                    <CastList id={item.id} />
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                <VideoList id={item.id} />
                            </div>
                            <div className="section mb-3">
                                <div className="section__header mb-2 similar">
                                    <h2>Similar</h2>
                                </div>
                                <Similar category={category} id={item.id} />
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )

}
export default Detail