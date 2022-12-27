import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { w500Image, originalImage, getMoviePopular, getVideos } from '../../api/tmdbApi'

import Modal, { ModalContent } from '../modal/modal';

import './hero-slide-item.scss'

const HeroSlideItem = props => {
    const item = props.item

    const background = originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path)

    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${item.id}`);

        const videos = await getVideos(item.id);

        if (videos.data.results.length > 0) {
            const videoSrc = 'https://www.youtube.com/embed/' + videos.data.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc);
        } else {
            modal.querySelector('.modal__content').innerHTML = 'No trailer';
        }

        modal.classList.toggle('active');

        // console.log("Check data:", videos);
    }

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{ background: `url(${background})` }}
        >
            <div className="hero-slide__item__content">
                <div className="hero-slide__item__content__info">
                    <h2 className="title">{item.title}</h2>
                    <div className="overview">{item.overview}</div>
                    <div className="btns">
                        <Link to={'/movie/' + item.id}>
                            <button className='button-watch' >
                                Watch now
                            </button>
                        </Link>
                        <button className='button-trailer' onClick={setModalActive}>
                            Watch trailer
                        </button>
                    </div>
                </div>
                <div className="hero-slide__item__content__poster">
                    <img src={w500Image(item.poster_path)} alt="" />
                </div>
            </div>

        </div >
    )
}

export const TrailerModal = props => {
    const item = props.item;

    const iframeRef = useRef(null);

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return (
        <Modal active={false} id={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width="100%" height="300px" title="trailer"></iframe>
            </ModalContent>
        </Modal>
    )
}

export default HeroSlideItem