import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Users from './containers/Users'

import asyncComponent from './hoc/asyncComponent/asyncComponent'

const AsyncPizza = asyncComponent(() => {
    return import('./containers/Pizza.js')
})

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    <Link to="/">Users</Link>
                    <Link to="/pizza">Pizza</Link>                    
                </div>
                <div>
                    <Route path="/" exact components={Users} />
                    <Route path="/pizza" components={AsyncPizza} />
                </div>                
            </div>
        )
    }
}

export default App