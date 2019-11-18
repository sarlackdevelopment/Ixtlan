import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import _ from 'lodash'

import fetchNews from './fetching'

const NewsGallery = () => {

    const dismensions = [[4, 4, 4], [6, 6], [8, 4], [4, 8]]

    const prepareNewsList = () => {

        let result = []
        const data = fetchNews()
        
        while (data.length != 0) {
    
            let newDismension = []
            const dismension = dismensions[_.random(0, 3)]
    
            dismension.forEach(item => {
                if (data.length != 0) {
                    newDismension.push({
                        dis: item,
                        ...data.shift()
                    })
                }
            })
    
            result.push(newDismension)
    
        }

        return result

    }

    const renderNews = (block) => { 
        return (block.map(({dis, id, title, body}) => (
            <Col key={`col_${id}`} xs={12} md={dis} className="mb-4">  
                <Card key={id} border="primary" className="h-100">
                    <Card.Header>{title}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {body}
                            <Button variant="link">подробнее...</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>)
        ))
    }

    return (
        <Container>
            {prepareNewsList().map((item, idx) => (
                <Row key={idx}>{renderNews(item)}</Row>
            ))}
        </Container>
    )
        
}

export default NewsGallery