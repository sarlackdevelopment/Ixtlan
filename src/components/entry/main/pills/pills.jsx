import React from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const Pills = () => {
    return (      
        <Tabs justify defaultActiveKey="about_cattery" className="text-nowrap">
            <Tab eventKey="about_cattery" title="О питомнике">
                {`О питомнике`}
            </Tab>
            <Tab eventKey="about_breed" title="О породе">
                {`О породе`}
            </Tab>
            <Tab eventKey="exhibitions" title="Выставки">
                {`Выставки`}
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