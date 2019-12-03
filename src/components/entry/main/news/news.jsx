import React, {useState, useEffect} from 'react'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import axios from 'axios'

const News = () => {

    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8081/assets/stub/news/news1.json`)
            .then(response => setNews(response.data.news))
            .catch(error => console.log(error))
    }, [])

    return (
        <Accordion defaultActiveKey="1" as="aside">
            <h4 className="text-center align-self-center">Новости</h4>
            {news.map(({id, title, body}) => (
                <Card key={id} as="article">
                    <Card.Header>
                        <Accordion.Toggle as={Button} className='btn-block' variant="link" eventKey={id}>
                            {title}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={id}>
                        <Card.Body as="p" className="shadow-lg m-3 p-4 bg-white rounded">
                            {body}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
    )
}

export default News