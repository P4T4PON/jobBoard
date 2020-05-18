import React, { useState } from 'react'
import MachmakingInput from '../../matchmakingInputBox/matchmakingInput/MatchmakingInput';
import SubmitButton from '../../../additions/SubmitButton';
import RegisterCheckbox from './registerCheckbox/RegisterCheckbox'
import { Route, Switch } from 'react-router-dom'

const Login = ({ isDay, text }) => {
    const [inputData, setInputData] = useState({ email: '' })
    const [emailError, setEmailError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target
        setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
        if (event.target.name === 'email') {
            const etv = event.target.value;
            if (
                etv.includes('@') &&
                etv.includes('.') &&
                etv.length >= 5
            ) {
                setEmailError('');
            } else if (etv === '') {
                setEmailError('email is required field');
            } else {
                setEmailError('email is invalid');
            }
        }
    }

    return (
        <div className="login">
            <MachmakingInput
                value={inputData.email}
                checkInputLength={handleChange}
                checkInputBlurLength={handleChange}
                span={'Email'}
                name={'email'}
                error={emailError}
                isDay={isDay}
            />
            <Switch>
                <Route exact path='/devs/Register'>
                    <RegisterCheckbox />
                </Route>
            </Switch>
            <SubmitButton value={text} className={'loginSubmit'} />
        </div>
    )
}

export default Login
