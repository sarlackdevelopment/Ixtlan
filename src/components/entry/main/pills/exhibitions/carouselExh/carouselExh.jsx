import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

import { fetchImg } from '../fetching'

const carouselExh = () => {
    return (
        <Carousel indicators={false}>
            {fetchImg().map(({id, path}) => (
                <Carousel.Item key={id}>
                    <Image src={path} fluid />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default carouselExh