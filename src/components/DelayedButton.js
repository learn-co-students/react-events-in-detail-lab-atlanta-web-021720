import React from 'react'

export default class DelayedButton extends React.Component {
//props = {onDelayedClick: fn, delay: #}

    delayClickHandler = (event) => {
        event.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, event)
    }

    render(){
        return (
            <button
            onClick={this.delayClickHandler}
            />
        )
    }
}
