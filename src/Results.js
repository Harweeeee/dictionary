import React from 'react'
import Meaning from './Meaning'
import './Results.css'
import Images from './Images'

export default function Results(props) {
    if (props.results) {
        let word = props.results.data.word
        let phonetic = props.results.data.phonetic
        let meanings = props.results.data.meanings

        return (
            <div className="displayResults">
                <header>
                    <h1>
                        <strong>{word}</strong>
                    </h1>

                    <p className="pNotationData">{phonetic}</p>
                </header>
                <main>
                    <div className="definedInfo">
                        {meanings.map(function (meaning) {
                            return <Meaning meaning={meaning} />
                        })}
                    </div>
                    <div className="images">
                        <Images keyword={word} />
                    </div>
                </main>
            </div>
        )
    } else {
        return (
            <p className="text-center errorMessage">
                Hmm... seems like we don't have that word. Please search
                another.
            </p>
        )
    }
}
