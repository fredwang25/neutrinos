import React from React;

class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentVertex: null,
        };
    }

    render() {
        return (
            <div>
                {this.currentVertex.getPopupData()}
            </div>
        );
    }
}

export default Popup;