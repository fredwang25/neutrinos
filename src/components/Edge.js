import React from React;

class Edge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            parent: null,
            child: null,
        };
    }

    render() {
        return (
        <svg></svg>
        );
    }
}

export default Edge;