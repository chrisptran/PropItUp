import React, { Component } from 'react'

export class PersonCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    render() {
        const {lastName, firstName, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
            <button onClick={ () => {
                this.setState({
                    age: this.state.age+1
                })
            }}>Birthday {this.props.firstName}</button>
            </div>
        )
    }
}

export default PersonCard