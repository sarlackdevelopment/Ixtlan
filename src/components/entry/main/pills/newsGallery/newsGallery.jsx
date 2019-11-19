import React, {useState, useEffect} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PiceOfNews from './piceOfNews'

import _ from 'lodash'
import axios from 'axios'

const NewsGallery = () => {

    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8081/assets/stub/news.json`)
            .then(response => setNews(response.data.news))
            .catch(error => console.log(error))
    }, [])

    const dismensions = [[4, 4, 4], [6, 6], [8, 4], [4, 8]]

    const prepareNewsList = () => {

        let result = []
        
        while (news.length != 0) {
    
            let newDismension = []
            const dismension = dismensions[_.random(0, 3)]
    
            dismension.forEach(item => {
                if (news.length != 0) {
                    newDismension.push({
                        dis: item,
                        ...news.shift()
                    })
                }
            })
    
            result.push(newDismension)
    
        }

        return result

    }

    const renderNews = (block, lastNews) => {

        let count = 0
        let result = []

        block.map(({dis, id, title, body}, index) => {
            const evalDis = lastNews && (index == block.length - 1) ? 12 - count : dis
            result.push(
                <Col key={`col_${id}`} xs={12} md={evalDis} className="mb-4">
                    <PiceOfNews dis={dis} id={id} title={title} body={body} />  
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