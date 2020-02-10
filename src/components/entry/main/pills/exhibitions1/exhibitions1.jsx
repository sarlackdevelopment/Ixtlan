import React, {useState, useEffect} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import PiceOfExhibitions1 from './piceOfExhibitions1'
import PaginationUtil from '../../../utils/paginationUtil'

import _ from 'lodash'
import axios from 'axios'

const setCurrentPage = page => setCurrentPage(page)

const Exhibitions1 = () => {

    const [currentPage, setCurrentPage] = useState(1)
    const [exhibitions, setExhibitions] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8081/assets/stub/exhibitions/exhibitions${currentPage}.json`)
            .then(response => setExhibitions(prepareExhibitionsList(response.data.exhibitions)))
            .catch(error => console.log(error))
    }, [currentPage])

    const dismensions = [[4, 4, 4], [6, 6], [8, 4], [4, 8]]

    const prepareExhibitionsList = (myExhibitions) => {

        let result = []
        
        while (myExhibitions.length != 0) {
    
            let newDismension = []
            const dismension = dismensions[_.random(0, 3)]
    
            dismension.forEach(item => {
                if (myExhibitions.length != 0) {
                    newDismension.push({
                        dis: item,
                        ...myExhibitions.shift()
                    })
                }
            })
    
            result.push(newDismension)
    
        }

        return result

    }

    const renderExhibitions = (block, lastExhibitions) => {

        let count = 0
        let result = []

        block.map(({dis, id, title, body, src}, index) => {
            const evalDis = lastExhibitions && (index == block.length - 1) ? 12 - count : dis
            result.push(
                <Col key={`col_${id}`} xs={12} md={evalDis} className="mb-4">
                    <PiceOfExhibitions1 
                        dis={dis} 
                        id={id} 
                        title={title} 
                        body={body} 
                        srcImg={src} 
                        currentPage={currentPage}
                        someSet={setExhibitions}
                    />
                </Col>
            )
            count = count + dis
        })
        
        return result
    }

    return (
        <Container>
            {exhibitions.map((item, idx) => <Row key={idx}>{renderExhibitions(item, idx == exhibitions.length - 1)}</Row>)}
            <PaginationUtil setCurrentPage={setCurrentPage} />
        </Container>
    )
        
}

export default Exhibitions1