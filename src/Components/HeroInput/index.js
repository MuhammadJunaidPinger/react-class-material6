import React, { Component } from 'react'

class HeroInput extends Component {
    render() {
        const { bgColor, fontPemaish } = this.props

        const style = {
            color: "white", 
            background: bgColor || "blue", 
            fontSize: fontPemaish || 20,
            height: fontPemaish
        }

        return (
            <input style={style} />
        )
    }
}

export default HeroInput