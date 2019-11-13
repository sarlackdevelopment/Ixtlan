import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import News from './news'

const Main = () => {
    return (
        <Container>
            <Row>
                <Col xs={{span: 12, order: 2}} lg={{span: 4, order: 1}}>
                    <News />
                </Col>
                <Col xs={{span: 12, order: 1}} lg={{span: 8, order: 2}}>Основной контент</Col>
            </Row>
        </Container>      
    )
}

export default Main