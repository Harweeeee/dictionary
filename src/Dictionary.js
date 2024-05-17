import React, { useState } from 'react'
import axios from 'axios'
import './Dictionary.css'
import Results from './Results'

export default function Dictionary() {
    let [keyword, setKeyword] = useState(null)
    let [results, setResults] = useState(null)

    const apiKey = '263tdf1c5f75o8ab465cedabbe0f4604'
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`

    function handleKeywordChange(event) {
        setKeyword(event.target.value)
    }

    function handleResponse(response) {
        setResults(response.data)
    }

    function search(event) {
        event.preventDefault()
        axios.get(apiUrl).then(handleResponse)
    }

    if (!results) {
        return (
            <div className="Dictionary">
                <div className="defineDictionary">
                    <h1>
                        <strong>dictionary</strong>{' '}
                    </h1>

                    <p className="pNotation">/ˈdɪkʃən(ə)ri/</p>

                    <p className="nounDictionary">
                        a book or electronic resource that lists the words of a
                        language (typically in alphabetical order) and gives
                        their meaning, or gives the equivalent words in a
                        different language, often also providing information
                        about pronunciation, origin, and usage.
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
    } else {
        return (
            <div className="loadPage">
                <form className="searchBox text-center" onSubmit={search}>
                    <input
                        type="search"
                        className="inputWord"
                        placeholder="Search the dictionary..."
                        onChange={handleKeywordChange}
                    ></input>
                </form>
                <Results results={results} />
            </div>
        )
    }
}
