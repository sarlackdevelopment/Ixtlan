import React, {useState, useEffect} from 'react'

import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

import axios from 'axios'

const carouselExh = ({id, exh_id}) => {

    const [exhibitionsImg, setExhibitionsImg] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8081/assets/stub/exhibitions/exhibitions${exh_id}.json`)
            .then(response => setExhibitionsImg(prepareExhibitionDetails(response.data.exhibitions)))
            .catch(error => console.log(error))
    }, [])

    const prepareExhibitionDetails = data => {
        const target = data.filter(elem => elem.id === id)
        return target.length == 1 ? target[0].exhibitionsImg : []
    }

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