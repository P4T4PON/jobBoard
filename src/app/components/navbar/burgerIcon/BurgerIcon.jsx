import React from 'react'
import { useDispatch } from 'react-redux';
import { test } from '../../../actions/index'

const BurgerIcon = ({ toggleTest }) => {

    const dispatch = useDispatch();
    return (
        <div
            className="bars hov"
            onMouseUp={() => { dispatch(test()); toggleTest() }}
        >
            <i className="fas fa-bars" />
        </div>
    )
}

export default BurgerIcon
