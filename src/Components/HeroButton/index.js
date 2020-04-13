import React, { Component } from 'react'
import { capitalAllLetters } from '../../Utilities/captalize'

class HeroButton extends Component {
    render() {
        const { bgColor, buttonText, fontPemaish } = this.props

        const style = {
            color: "white", 
            background: bgColor || "gray", 
            fontSize: fontPemaish || 20,
            height: fontPemaish
        }

        return (
            <button 
            style={style}>
                {buttonText}
            </button>
        )
    }
}

export default HeroButton