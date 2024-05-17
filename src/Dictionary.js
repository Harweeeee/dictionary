import React, { useState } from 'react'
import './Dictionary.css'

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null)

    function handleKeywordChange(event) {
        setKeyword(event.target.value)
    }

    function search(event) {
        event.preventDefault()
        alert('Searching...')
    }

    return (
        <div className="Dictionary">
            <div className="defineDictionary">
                <h1>
                    <strong>dictionary</strong>{' '}
                </h1>

                <p className="pNotation">/ˈdɪkʃən(ə)ri/</p>

                <p className="nounDictionary">
                    a book or electronic resource that lists the words of a
                    language (typically in alphabetical order) and gives their
                    meaning, or gives the equivalent words in a different
                    language, often also providing information about
                    pronunciation, origin, and usage.
                </p>
            </div>
            <form className="searchBox text-center" onSubmit={search}>
                <input
                    type="search"
                    className="inputWord"
                    placeholder="Search the dictionary..."
                    onChange={handleKeywordChange}
                ></input>
            </form>
        </div>
    )
}
