import React from 'react'
import './Meaning.css'

export default function Meaning(props) {
    return (
        <div className="Meaning">
            {props.meaning.map(function (meaning, index) {
                return (
                    <div key="index">
                        <h4>
                            <em>{meaning.partOfSpeech}</em>
                        </h4>
                        <p className="definition">{meaning.definition}</p>
                        <p className="example">{meaning.example}</p>
                    </div>
                )
            })}
        </div>
    )
}
