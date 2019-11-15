import React from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

import { fetchImg } from '../fetching'

const carouselExh = () => {
    return (
        <Carousel indicators={false}>
            {fetchImg().map(({id, src}) => (
                <Carousel.Item key={id}>
                    <Image src={src} fluid />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default carouselExh