import React from React;

class Vertex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            grayed: false,
            parents: Array(),
            children: Array(),
            popupData: null,
        };
    }
    render() {

    }
}

export default Vertex;