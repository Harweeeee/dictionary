import React from 'react'
import ReactDOM from 'react-dom/client'
import Dictionary from './Dictionary'
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Dictionary />
        <footer className="footer text-center">
            Project coded by{' '}
            <a href="https://github.com/Harweeeee">Harleigh Gallant</a>,
            published on{' '}
            <a href="https://github.com/Harweeeee/dictionary">Github</a> and
            hosted on <a href="https://main--wordtome.netlify.app/y">Netlify</a>
        </footer>
    </React.StrictMode>
)
