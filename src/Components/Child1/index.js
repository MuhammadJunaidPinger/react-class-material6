import React, { Component } from 'react'

class Kashif extends Component {
    render() {
        return (
            <button onClick={this.props.jabBtnClickHo}>
                Click me from Child1
            </button>
        )
    }
}

export default Kashif