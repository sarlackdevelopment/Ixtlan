import React from 'react'

import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import fetchNews from './fetching'

const Exhibitions = () => {
    return (
        <div></div>
    )
}

{/*<Accordion defaultActiveKey="1" as="aside">
            <h4 className="text-center align-self-center"></h4>
            {fetchNews().map(({id, title, body}) => (
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
            </Accordion>*/}

export default Exhibitions