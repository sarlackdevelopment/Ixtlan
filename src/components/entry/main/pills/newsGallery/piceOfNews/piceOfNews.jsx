import React, {useState, useLayoutEffect} from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// TODO: Вынести в утилиты key="Модальное окно"
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
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi corrupti, consequatur cum a, omnis facilis sed similique amet ullam aut quis! Cupiditate similique explicabo harum suscipit delectus? Amet, autem voluptate.</div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    )
}

const splitNewsBody = (body, dis, width) => {

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

const PiceOfNews = ({dis, id, title, body}) => {

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
            <Card.Text>
                {splitNewsBody(body, dis, width)}
                <Button variant="link" onClick={() => setModalShow(true)}>подробнее...</Button>
            </Card.Text>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Card.Body>
    </Card>)
}

export default PiceOfNews