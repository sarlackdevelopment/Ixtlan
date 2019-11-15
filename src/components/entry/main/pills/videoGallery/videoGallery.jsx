import React from 'react'

import CardDeck from 'react-bootstrap/CardDeck'

import Video from './video'

import _ from 'lodash'

import fetchVideo from './fetching'

const VideoGallery = () => {

    const data = _.chunk(fetchVideo(), 3)

    return (
        <>
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