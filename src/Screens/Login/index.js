import React, { Component } from 'react'
import HeroButton from '../../Components/HeroButton'

export default class Login extends Component {
    onSubmit = () => {
        /* */
        this.props.jabLoginKare()
    }

    render() {
        return <div style={{background: 'pink', height: 200, color: 'black'}}>
            <h1>Login</h1>

            <input placeholder="Email"/>
            <input placeholder="Password"/>

            {/* <HeroButton buttonText="Submit"/> */}
            <button onClick={this.onSubmit}>Submit</button>
        </div>
    }
}