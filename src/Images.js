import React, { useState } from 'react'
import axios from 'axios'
import './Images.css'

export default function Images(props) {
    const imageApiKey = '263tdf1c5f75o8ab465cedabbe0f4604'
    let query = `${props.keyword}`
    const imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${query}&key=${imageApiKey}`
    let [images, setImages] = useState(null)
    let [searching, setSearching] = useState(true)

    function handleImageLibrary(response) {
        setImages(response.data)
        setSearching(false)
    }

    if (props.keyword && searching) {
        axios.get(imageApiUrl).then(handleImageLibrary)
    }

    if (images) {
        return (
            <div className="Images">
                <div className="gridContainer">
                    {images.photos.map(function (image) {
                        return (
                            <div className="column">
                                <img
                                    className="searchImage"
                                    src={image.src.landscape}
                                    alt="Visual of search item"
                                />
                            </div>
                        )
                    })}{' '}
                </div>
            </div>
        )
    } else {
        return null
    }
}
