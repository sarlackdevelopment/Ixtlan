import React, {useState, useEffect} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PiceOfNews from './piceOfNews'
import PaginationUtil from '../../../utils/paginationUtil'

import _ from 'lodash'
import axios from 'axios'

const setCurrentPage = page => setCurrentPage(page)

const NewsGallery = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8081/assets/stub/news/news${currentPage}.json`)
            .then(response => setNews(prepareNewsList(response.data.news)))
            .catch(error => console.log(error))
    }, [currentPage])

    const dismensions = [[4, 4, 4], [6, 6], [8, 4], [4, 8]]

    const prepareNewsList = (myNews) => {

        let result = []
        
        while (myNews.length != 0) {
    
            let newDismension = []
            const dismension = dismensions[_.random(0, 3)]
    
            dismension.forEach(item => {
                if (myNews.length != 0) {
                    newDismension.push({
                        dis: item,
                        ...myNews.shift()
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

    return (
        <Container>
            {news.map((item, idx) => <Row key={idx}>{renderNews(item, idx == news.length - 1)}</Row>)}
            <PaginationUtil setCurrentPage={setCurrentPage} />
        </Container>
    )
        
}

export default NewsGallery