import React, { Component } from 'react'

class Rizwan extends Component {
    constructor(props) {
        super(props)

        this.state = {
            changeHua: props.parentState,
            data: []
        }
        /*
          1) states initialized
          2) functions bindings
        */
        this.something = this.something.bind(this)
        this.anotherThing = this.anotherThing.bind(this)
    }

    static getDerivedStateFromProps(props) {
        //Props ke zarye state change
        return {
            changeHua: props.parentState
        }
    }

    componentDidMount() {
        /*
            Call any function that you want to call initially
        */
       console.log("componentDidMount --->")
       this.getAllData()
    }

    getAllData() {
        console.log("getAllData --->")
        /*
        Get all data here from firebase
        */
       fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            this.setState({
                data: json
            })
        })
    
        // fetch('https://jsonplaceholder.typicode.com/comments')
        // .then(response => response.json())
        // .then(json => console.log(json))
    }

    something() {

    }

    anotherThing() {

    }

    render() {
        const { changeHua, data } = this.state
        const { parentState } = this.props
        console.log("Rizwan Bhai parentState -->", parentState)
        console.log("Rizwan bhai changeHua (apni state)--->", changeHua)

        return (
            <div>
                <h1>{changeHua ? "Change hogaya hai" : "No Change!"}</h1>
                <button onClick={this.something}>
                    Click me from Child2
                </button>
                <button onClick={this.anotherThing}>
                    Click me from Child2
                </button>

                {data.map(item => {
                    return <p>{item.title}</p>
                })}
            </div>
        )
    }
}

export default Rizwan