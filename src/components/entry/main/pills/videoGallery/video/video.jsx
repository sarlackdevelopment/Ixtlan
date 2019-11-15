import React, { useState } from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { Player } from 'video-react'

import 'video-react/dist/video-react.css'

const MyVerticallyCenteredModal = props => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Player><source src={props.srcvideo} /></Player>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Video = ({data}) => {

    const {header, body, footer, srcVideo, srcImg} = data

    const [modalShow, setModalShow] = useState(false)
  
    return (
        <Card bg="light">

            <Button variant="link" onClick={() => setModalShow(true)}>
                <Card.Img variant="top" src={srcImg} />
            </Button>

            <MyVerticallyCenteredModal
                title={header}
                srcvideo={srcVideo}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <Card.Body>
                <Card.Title>{header}</Card.Title>
                <Card.Text>{body}</Card.Text>
            </Card.Body>

            <Card.Footer>
                <small className="text-muted">{footer}</small>
            </Card.Footer>

        </Card>
    )
}
  
export default Video