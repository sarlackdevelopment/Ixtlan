import React, { useState, useCallback, useEffect } from "react"

import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

import axios from 'axios'

const galleryExh = () => {

    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)
    const [exhibitionsImg, setExhibitionsImg]   = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8081/assets/stub/exhibitions.json`)
            .then(response => setExhibitionsImg(response.data.exhibitionsImg))
            .catch(error => console.log(error))
    }, [])

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index)
        setViewerIsOpen(true)
    }, [])

    const closeLightbox = () => {
        setCurrentImage(0)
        setViewerIsOpen(false)
    }

    return (
        <>
            <Gallery photos={exhibitionsImg} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={exhibitionsImg.map(img => ({...img}))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </>
    )
}

export default galleryExh