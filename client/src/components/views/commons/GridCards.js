import React from 'react'
import { Col } from 'antd'

function GridCards(props) {
    return (
        <Col lg={6} md={8} xs={24}>
            <div style={{ position: 'relative' }}>
                <a href={`/movie/${props.movieId}`} >
                    <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.movieName} />
                    <h2 style={{ fontSize: '18px', margin: '0'}}>{props.movieTitle}</h2>
                    <p style={{ fontSize: '12px', margin: '0' }}>Release: {props.movieDate}</p>
                </a>
            </div>
        </Col>
    )
}

export default GridCards

