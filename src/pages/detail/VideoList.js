import React, { useState, useEffect, useRef } from 'react';

import { useParams } from 'react-router';

import { getCredits, getDetail, getVideos } from '../../api/tmdbApi';

const VideoList = props => {

    const { category } = useParams();

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const videos = async () => {
            const res = await getDetail(category, props.id);
            setVideos(res.data);
            console.log(res.data);
        }
        videos();
    }, [category, props.id]);

    const iframeRef = useRef(null);
    useEffect(() => {
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px';
        iframeRef.current.setAttribute('height', height);
    }, []);

    return (
        <>
            <div className="video">
                <div className="video__title">
                    <h2>{videos.title}</h2>
                </div>
                <iframe
                    src={`https://www.2embed.to/embed/tmdb/movie?id=${videos.id}`}
                    ref={iframeRef}
                    width="100%"
                    title="video"
                ></iframe>
            </div>
        </>
    );
}

export default VideoList;