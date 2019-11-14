import React from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container';

import CatteryInfo from './catteryInfo'
import BreedInfo from './breedInfo'
import Exhibitions from './exhibitions'

const Pills = () => {

    return (      
        <Tabs justify defaultActiveKey="about_cattery" variant="pills" className="text-nowrap">
            <Tab eventKey="about_cattery" title="О питомнике">
                <Container as="section" className="p-3">
                    <h3 className="text-center">О питомнике</h3>
                    <CatteryInfo />
                </Container>
            </Tab>
            <Tab eventKey="about_breed" title="О породе">
                <Container as="section" className="p-3">
                    <h3 className="text-center">О породе</h3>
                    <BreedInfo />
                </Container>
            </Tab>
            <Tab eventKey="exhibitions" title="Выставки">
                <Container as="section" className="p-3">
                    <h3 className="text-center">Выставки</h3>
                    <Exhibitions />
                </Container>
            </Tab>
            <Tab eventKey="video" title="Видео">
                {`Видео`}
            </Tab>
            <Tab eventKey="news" title="Новости">
                {`Новости`}
            </Tab>
            <Tab eventKey="Documents" title="Документы">
                {`Документы`}
            </Tab>
        </Tabs>
    )
}

export default Pills