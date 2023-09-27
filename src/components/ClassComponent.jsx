import React from "react";

class ClassComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0,
        }
    }
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <p>
                    <button onClick={() => this.setState({ counter: this.state.counter - 1 })}> - </button>
                    {this.state.counter}
                    <button onClick={() => this.setState({ counter: this.state.counter + 1 })}> + </button>
                </p>
            </div>
        );
    }
}

export default ClassComponent;