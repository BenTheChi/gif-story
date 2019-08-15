import React from 'react'
import { Router, Route } from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'
import Create from './Create'
import Title from './Title'
import Help from './Help'
import Load from './Load'
import Story from './Story'
import End from './End'
import './main.css'
import './create.css'
import './footer.css'
import './help.css'
import './story.css'
import './title.css'
import history from '../history'

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Route path="/" exact component={Home}/>
                <Route path="/create" exact component={Create}/>
                <Route path="/title" exact component={Title}/>
                <Route path="/help" exact component={Help}/>
                <Route path="/load" exact component={Load}/>
                <Route path="/story" exact component={Story}/>
                <Route path="/end" exact component={End}/>
                <Footer/>
            </Router>
        </div>
    )
}

export default App;