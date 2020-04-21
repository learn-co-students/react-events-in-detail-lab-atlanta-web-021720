import React from 'react'

export default class CoordinatesButton extends React.Component {

    handleCoordinatesClick = (event) => {
        let coords = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coords)
    }

    render(){
        return (
            <button
            onClick={this.handleCoordinatesClick}
            />
        )
    }
}
