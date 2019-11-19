import React, {useState, useEffect} from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

import axios from 'axios'

const carouselExh = () => {

    const [exhibitionsImg, setExhibitionsImg]   = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8081/assets/stub/exhibitions.json`)
            .then(response => setExhibitionsImg(response.data.exhibitionsImg))
            .catch(error => console.log(error))
    }, [])

    return (
        <Carousel indicators={false}>
            {exhibitionsImg.map(({id, src}) => (
                <Carousel.Item key={id}>
                    <Image src={src} fluid />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default carouselExh