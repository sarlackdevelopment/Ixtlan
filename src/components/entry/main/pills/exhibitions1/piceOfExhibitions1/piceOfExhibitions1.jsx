import React, {useState, useLayoutEffect} from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Jumbotron from 'react-bootstrap/Jumbotron'

import CarouselExh from './carouselExh'
import GalleryExh from './galleryExh'

// TODO: Вынести в утилиты key="Модальное окно"
const MyVerticallyCenteredModal = props => {

    // TODO: Попробовать использовать useCallback
    const createArticleBody = body => {__html: body}
    
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
                <CarouselExh id={props.id} exh_id={props.currentpage} />
                {/*<GalleryExh id={props.id} exh_id={props.currentpage}/>*/}
                <Jumbotron
                    className="shadow-lg p-3 mb-5 rounded"
                    dangerouslySetInnerHTML={createArticleBody(props.body)}
                /> 
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}

const splitExhibitionsBody = (body, dis, width) => {

    let count = 0

    if (width <= 992) {
        count = 80
    } else {
        switch (dis) {
            case 8:
                count = 60
                break     
            default:
                count = 10
                break
        }
    }

    return body.split(' ')
        .filter((item, idx) => idx <= count)
        .reduce((text, current) => `${text} ${current}`, '')

}

// Дриллинг (currentPage) - пора задействовать redux
const PiceOfExhibitions1 = (
    {
        dis, 
        id, 
        title, 
        body, 
        srcImg, 
        currentPage,
        someSet
    }) => {

    const [width, setWidth] = useState(0)
    const [modalShow, setModalShow] = useState(false)

    useLayoutEffect(() => {

        const updateWidth = () => setWidth(window.innerWidth)
        window.addEventListener('resize', updateWidth)
        updateWidth()

        return () => window.removeEventListener('resize', updateWidth)

    }, [])

    return (<Card key={id} border="primary" className="h-100">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
            <Card.Img variant="top" src={srcImg} />
            <Card.Text>
                {splitExhibitionsBody(body, dis, width)}
                <Button variant="link" onClick={() => setModalShow(true)}>подробнее...</Button>
                {/* <hr />
                <Button variant="link" onClick={() => someSet()}>галлерея...</Button>*/}
            </Card.Text>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={id}
                title={title}
                body={body}
                currentpage={currentPage}
            />
        </Card.Body>
    </Card>)
}

export default PiceOfExhibitions1