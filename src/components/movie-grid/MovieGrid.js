import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router';
import './movie-grid.scss';

import MovieCard from '../movie-card/MovieCard';

import { category, movieType, tvType, search, getMovieType, getTVType } from '../../api/tmdbApi';

import Input from '../input/Input'



const MovieGrid = props => {

    const [items, setItems] = useState([]);

    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    const { keyword } = useParams();

    useEffect(() => {
        let getList = async () => {
            let response = null;
            if (keyword === undefined) {
                switch (props.category) {
                    case category.movie:
                        response = await getMovieType(movieType.upcoming, page);
                        break;
                    default:
                        response = await getTVType(tvType.popular, page);
                }
            } else {
                response = await search(props.category, page, keyword);
            }
            setItems(response.data.results);
            setTotalPage(response.data.total_pages);
            // console.log(response.data.results);
        }
        getList();
    }, [props.category, keyword])


    const loadMore = async () => {
        let response = null;
        if (keyword === undefined) {
            switch (props.category) {
                case category.movie:
                    response = await getMovieType(movieType.upcoming, page);
                    break;
                default:
                    response = await getTVType(tvType.popular, page);
            }
        } else {
            response = await search(props.category, page, keyword);
        }
        setItems([...items, ...response.data.results]);
        setPage(page + 1)
        console.log("CHeck page:", response.data.page);
        console.log("CHeck page:", response.data.results);
    }


    return (
        <>
            <div className="section mb-3">
                <MovieSearch category={props.category} keyword={keyword} />
            </div>
            <div className="movie-grid">
                {
                    items.map((item, i) => <MovieCard category={props.category} item={item} key={i} />)
                }
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <button className="loadmore" onClick={loadMore}>Load more</button>
                    </div>
                ) : null
            }
        </>
    )
}

const MovieSearch = props => {

    const history = useNavigate();

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');

    const goToSearch = useCallback(
        () => {
            if (keyword.trim().length > 0) {
                history(`/${category[props.category]}/search/${keyword}`);
            }
        },
        [keyword, props.category, history]
    );

    useEffect(() => {
        const enterEvent = (e) => {
            e.preventDefault();
            if (e.keyCode === 13) {
                goToSearch();
            }
        }
        document.addEventListener('keyup', enterEvent);
        return () => {
            document.removeEventListener('keyup', enterEvent);
        };
    }, [keyword, goToSearch]);

    return (
        <div className="movie-search">
            <Input
                type="text"
                placeholder="Enter keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <button className="search" onClick={goToSearch}>Search</button>
        </div>
    )
}

export default MovieGrid