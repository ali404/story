import React from 'react'
import Base from '../_helpers/BaseComponent.react'
import {Link} from 'react-router'

import TodoInput from '../TodoInput/TodoInput.react'

import TodoActions from '../../actions/TodoActions'



export default class Header extends Base {
    constructor() {
        super()
        this._bind('_onSave')
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="ten columns centered">
                        <h1 className="title-centered">TODO App</h1>
                        <Link to="/todos">Todos</Link>
                        <Link to="/">Home</Link>
                    </div>
                </div>
            </div>
        )
    }

    _onSave(text) {
        TodoActions.create(text)
    }
}
