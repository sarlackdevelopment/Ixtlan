import React, {dangerouslySetInnerHTML} from 'react'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'

import CarouselExh from './carouselExh'

import fetchExhibitions from './fetching'

const Exhibitions = () => {

    // TODO: Попробовать использовать useCallback
    const createArticleBody = (body) => {
        return {__html: body}
    }

    return (
        <Accordion defaultActiveKey="1">
            {fetchExhibitions().map(({id, short_description, long_description}) => (
                <Card key={id}>
                    <Card.Header>
                        <Accordion.Toggle as={Button} className='btn-block' variant="link" eventKey={id}>
                            {short_description}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={id}>
                        <Card.Body as="aside">
                            <CarouselExh />
                            <Jumbotron
                                className="shadow-lg p-3 mb-5 rounded"
                                dangerouslySetInnerHTML={createArticleBody(long_description)}
                            />                           
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
    )
}

export default Exhibitions