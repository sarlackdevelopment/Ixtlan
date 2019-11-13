import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const Banner = () => {
    return (
        <Container as="header">
            <Row className="justify-content-md-center">
                <Col>
                    <Image src='/assets/img/Caption.png' fluid className="mx-auto d-block" />
                    <h1 className="text-center">
                        {`Питомник норвежских лесных кошек в Москве`}
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Banner