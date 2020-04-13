import React, { Component } from 'react'

export default class Home extends Component {
    state = {
        employees: [],
        name: '',
        email: ''
    }

    addEmployee = () => {
        const { name, age, email, employees } = this.state

        employees.push({ name, age, email })

        this.setState({
            employees
        })
    }

    onChange = (field, value) => {
        this.setState({
            [field]: value
        })
    }

    renderForm() {
        return <div>
            <input placeholder="Write name here" onChange={(e) => this.onChange("name", e.target.value)} />
            <input placeholder="Write email here" onChange={(e) => this.onChange("email", e.target.value)} />
            <input placeholder="Write age here" onChange={(e) => this.onChange("age", e.target.value)} />
            <button onClick={this.addEmployee}>Add Employee</button>
        </div>
    }

    renderTable() {
        const { employees } = this.state

        return <table border="2">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
            </tr>
            {employees.map((item, index) => {
                return <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                </tr>
            })}
        </table>
    }

    render() {
        return <div style={{ background: 'blue' }}>
            <h1>Home</h1>
            {this.renderForm()}
            {this.renderTable()}
        </div>
    }
}