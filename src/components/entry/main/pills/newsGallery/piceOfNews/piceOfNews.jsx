import React, {useState, useLayoutEffect} from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const splitNewsBody = (body, dis, width) => {

    let count = 0

    if (width <= 992) {
        count = 80
    } else {
        switch (dis) {
            case 8:
                count = 60
                break     
            default:
                count = 10
                break
        }
    }

    return body.split(' ')
        .filter((item, idx) => idx <= count)
        .reduce((text, current) => `${text} ${current}`, '')

}

const PiceOfNews = ({dis, id, title, body}) => {

    const [width, setWidth] = useState(0)

    useLayoutEffect(() => {

        const updateWidth = () => setWidth(window.innerWidth)
        window.addEventListener('resize', updateWidth)
        updateWidth()

        return () => window.removeEventListener('resize', updateWidth)

    }, [])

    return (<Card key={id} border="primary" className="h-100">
        <Card.Header>{title}</Card.Header>
        <Card.Body>
            <Card.Text>
                {splitNewsBody(body, dis, width)}
                <Button variant="link">подробнее...</Button>
            </Card.Text>
        </Card.Body>
    </Card>)
}

export default PiceOfNews