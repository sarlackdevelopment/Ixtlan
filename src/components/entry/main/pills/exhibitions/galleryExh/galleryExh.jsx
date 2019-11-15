import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";

const galleryExh = () => {

    const [currentImage, setCurrentImage] = useState(0)
    const [viewerIsOpen, setViewerIsOpen] = useState(false)

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
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(photo => ({
                                ...photo,
                                srcset: photo.srcSet,
                                caption: photo.title
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </>
    )
}

export default galleryExh