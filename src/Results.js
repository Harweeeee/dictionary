import React from 'react'
import logo from './GIF folding book.gif'

export default function Results(props) {
    console.log(props.results)

    let word = props.results.data.word
    let phonetic = props.results.data.phonetic

    if (props.results) {
        return (
            <div className="displayResults">
                <h1>{word}</h1>
                <p className="pNotationData">{phonetic}</p>
            </div>
        )
    } else {
        return (
            <div className="displayLoading text-center">
                <img
                    src={logo}
                    alt="Book with folding pages as load screen"
                ></img>
                <p>Loading...</p>
            </div>
        )
    }
}
