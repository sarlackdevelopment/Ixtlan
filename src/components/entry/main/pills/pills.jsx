import React, { useLayoutEffect, useState } from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Figure from 'react-bootstrap/Figure'

const logoSize = () => {

    const [width, setWidth] = useState(0)

    useLayoutEffect(() => {

        const updateWidth = () => setWidth(window.innerWidth)
        window.addEventListener('resize', updateWidth)
        updateWidth()

        return () => window.removeEventListener('resize', updateWidth)

    }, [])

    return width >= 992 ? '50%': '100%'
}

const Pills = () => {
    
    return (      
        <Tabs justify defaultActiveKey="about_cattery" variant="pills" className="text-nowrap">
            <Tab eventKey="about_cattery" title="О питомнике">
                <Figure>
                    Приветствуем вас! Наш питомник норвежских лесных кошек занимается разведением соответствующей породы.
                    Располагайтесь. Если вы здесь, то, скорее всего, это значит, что вы интересуетесь этой прекрасной аборигенной
                    породой. Ну а если набрели случайно, то не стесняйтесь. Мы рады всем и каждому. Неважно, только пытаетесь ли вы
                    определиться с породой, или уже собираетесь купить норвежскую лесную кошку, в любом случае выбор этой породы - 
                    самый правильный выбор! Эти кошки – замечательные компаньоны, верные друзья и, конечно, дивной красоты животные.
                    <Figure.Image className="float-left mt-2 mr-2 mb-2" thumbnail
                        width={logoSize()}
                        alt="Изображение отсутствует"
                        src="/assets/img/pumpkin.jpg"
                    />
                    Врождённое воспитание, такт и ненавязчивость. Это одни из самых умных животных. Подробнее о породе читайте в
                    соответствующем разделе. Здесь вы найдёте информацию о породе, о нашем питомнике, о наших кошках и котах и о
                    многом другом. Много профессиональных фотографий, видео, интересные статьи - все это ждёт вас. Здесь вы можете
                    увидеть фото котят, зарезервировать и купить котенка. Также вы можете найти наши контакты и, не стесняясь, звонить,
                    если у вас есть какие-либо вопросы и предложения. Начните своё путешествие в Икстлан с нами. Добро пожаловать!
                </Figure>
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