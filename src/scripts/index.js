import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img
                    src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png"
                    style={{height: 240, width: 240}}
                />
                <h1>ykit-starter-react</h1>
                <ul>
                    <li><a href="https://facebook.github.io/react/docs/hello-world.html" target="_blank">Docs</a></li>
                    <li><a href="https://facebook.github.io/react/tutorial/tutorial.html" target="_blank">Tutorial</a></li>
                </ul>
            </div>
        )
    }
}

const render = () => ReactDOM.render(
    <App/>, document.getElementById('app')
);

render();

// hot-reload
if (module.hot) {
    module.hot.accept();
}
