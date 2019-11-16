import React, {useState} from 'react'

import CardDeck from 'react-bootstrap/CardDeck'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Video from './video'

import _ from 'lodash'

import fetchVideo from './fetching'

const VideoGallery = () => {

    const [countCol, setCountCol] = useState(2)
    const data = _.chunk(fetchVideo(), countCol)

    return (
        <>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        В ряд по:
                    </Form.Label>
                    <Col sm={2}>
                        <Form.Control as="select" onChange={event => setCountCol(event.target.value)}>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </Form.Control>
                    </Col>
                </Form.Group>
            </Form>

            {data.map(item =>
                <CardDeck 
                    key={item.reduce((key, {id}) => `${key}_${id}`, '')}
                    className="mb-1"
                >
                    {item.map(({id, ...currentVideo}) => <Video key={id} data={currentVideo} />)}
                </CardDeck>
            )}
        </>
    )
}

export default VideoGallery