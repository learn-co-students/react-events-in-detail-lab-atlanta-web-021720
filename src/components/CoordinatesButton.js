// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

    handleClickEvent = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }


    render() {
        return(
            <button onClick={this.handleClickEvent}>
                COORDS
            </button>
        )
    }
}
export default CoordinatesButton
