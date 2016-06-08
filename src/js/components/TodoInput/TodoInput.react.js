import React from 'react'
import Base from '../_helpers/BaseComponent.react'

function getInputInitialState() {
    return {
        value: ''
    }
}

export default class TodoInput extends Base {

    constructor() {
        super()
        this._bind(
            '_save',
            '_onChange',
            '_onKeyDown'
        )

        this.state = getInputInitialState()
    }

    render() {
        let textValue = this.state.value
        return (
            <div id="todo-input">
                <input
                    className="input-normal"
                    type="text"
                    onChange={this._onChange}
                    onKeyDown={this._onKeyDown}
                    value={textValue}
                />
            </div>
        )
    }

    _onChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    _onKeyDown(e) {
        if(e.keyCode === 13) {
            this._save()
        }
    }

    _save() {
        this.props.onSave(this.state.value)
        this.setState({
            value: ''
        })
    }
}