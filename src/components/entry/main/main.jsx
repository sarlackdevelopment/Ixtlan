import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Main = () => {
    return (
        <Container>
            <Row>
                <Col xs={{span: 12, order: 2}} lg={{span: 4, order: 1}} className='border border-primary'>Новости</Col>
                <Col xs={{span: 12, order: 1}} lg={{span: 8, order: 2}} className='border border-danger'>Основной контент</Col>
            </Row>
        </Container>      
    )
}

export default Main