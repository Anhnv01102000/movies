import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';

import { w500Image, getCredits } from '../../api/tmdbApi';

const CastList = props => {

    const { category } = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const credits = async () => {
            const res = await getCredits(category, props.id);
            setCasts(res.data.cast.slice(0, 5));
            console.log(res);

        }
        credits();
    }, [category, props.id]);
    return (
        <div className="casts">
            {
                casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        <div className="casts__item__img" style={{ backgroundImage: `url(${w500Image(item.profile_path)})` }}></div>
                        <p className="casts__item__name">{item.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default CastList;