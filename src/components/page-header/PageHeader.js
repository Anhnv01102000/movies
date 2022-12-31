import React from 'react';

import './page-header.scss';

import logo from '../../assets/footer-bg.jpg'

const PageHeader = props => {
    return (
        <div className='page-header' style={{ backgroundImage: `url(${logo})` }}>
            <h2>{props.children}</h2>
        </div>
    )
}

export default PageHeader

