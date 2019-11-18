import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Card from 'react-bootstrap/Card'
//import Button from 'react-bootstrap/Button'

import PiceOfNews from './piceOfNews'

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

    /* const splitNewsBody = (body, dis) => {

        let count = 0

        switch (dis) {
            case 8:
                count = 60
                break     
            default:
                count = 10
                break
        }

        return body.split(' ')
            .filter((item, idx) => idx <= count)
            .reduce((text, current) => `${text} ${current}`, '')

    } */

    const renderNews = (block, lastNews) => {

        let count = 0
        let result = []

        block.map(({dis, id, title, body}, index) => {
            const evalDis = lastNews && (index == block.length - 1) ? 12 - count : dis
            result.push(
                <Col key={`col_${id}`} xs={12} md={evalDis} className="mb-4">
                    <PiceOfNews dis={dis} id={id} title={title} body={body} />  
                    {/*<Card key={id} border="primary" className="h-100">
                        <Card.Header>{title}</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {splitNewsBody(body, dis)}
                                <Button variant="link">подробнее...</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>*/}
                </Col>
            )
            count = count + dis
        })
        
        return result
    }

    const newsList = prepareNewsList()

    return (
        <Container>
            {newsList.map((item, idx) => (
                <Row key={idx}>{renderNews(item, idx == newsList.length - 1)}</Row>
            ))}
        </Container>
    )
        
}

export default NewsGallery