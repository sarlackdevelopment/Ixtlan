import React from 'react'

import Figure from 'react-bootstrap/Figure'

import { logoSize } from '../utils'

const Cattery_info = () => {
    return (
        <Figure>
            <p>
                Приветствуем вас! Наш <mark>питомник норвежских лесных кошек</mark> занимается
                разведением соответствующей породы. Располагайтесь. Если вы здесь, то, скорее всего, это значит,
                что вы интересуетесь этой прекрасной аборигенной породой. Ну а если набрели случайно, то не
                стесняйтесь. Мы рады всем и каждому.
            </p>
            <Figure.Image className="float-left mt-2 mr-2 mb-2" thumbnail
                width={logoSize()}
                alt="Изображение отсутствует"
                src="/assets/img/pumpkin.jpg"
            />
            <p>
                Неважно, только пытаетесь ли вы определиться с породой, или уже собираетесь <mark>купить
                норвежскую лесную кошку</mark>, в любом случае выбор этой породы - самый правильный выбор! Эти кошки – замечательные
                компаньоны, верные друзья и, конечно, дивной красоты животные. Врождённое воспитание, такт и ненавязчивость. Это одни
                из самых умных животных. Подробнее о породе читайте в соответствующем разделе.</p>
                <p>Здесь вы найдёте информацию о породе, о нашем питомнике, о наших кошках и котах и о многом
                другом. Много профессиональных фотографий, видео, интересные статьи - все это ждёт вас.
                Здесь вы можете увидеть фото котят, зарезервировать и <mark>купить котенка</mark>.</p>
                <p>Также вы можете найти наши контакты и, не стесняясь, звонить, если у вас есть какие-либо
                вопросы и предложения. Начните своё <mark>путешествие в Икстлан</mark> с нами. Добро
                пожаловать!
            </p>
        </Figure>
    )
}

export default Cattery_info