import React from 'react'
import ReactDOM from 'react-dom'

import Link from './Link'

// test async/await
async function foo() {
    return await 1
}

export default class HelloMessage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Hello {this.props.name}</h1>
                <Link/>
            </div>
        )
    }
}

const render = () => ReactDOM.render(
    <HelloMessage name="Ykit!"/>, document.getElementById('app')
);

render();

// hot-reload
if (module.hot) {
    module.hot.accept();
}
