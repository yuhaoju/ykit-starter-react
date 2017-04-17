import React from 'react'

export default class Link extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <a href="http://gitlab.corp.qunar.com/mfe/ykit/tree/master" target="_blank">
                ykit documentation
            </a>
        )
    }
}
