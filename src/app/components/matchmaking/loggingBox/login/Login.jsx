import React, { useState } from 'react'
import MachmakingInput from '../../matchmakingInputBox/matchmakingInput/MatchmakingInput';
import SubmitButton from '../../../additions/SubmitButton';

const Login = ({ isDay }) => {
    const [input_type, setInputType] = useState(true);
    const [inputData, setInputData] = useState({ email: '', password: '' })
    const [contactsData, setContactsData] = useState([])
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    function handleChange(event) {
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
        } else if (event.target.name === 'password') {
            const etv = event.target.value;
            if (etv.length >= 6) {
                setPasswordError('');
            } else if (etv.length < 1) {
                setPasswordError('password is required field');
            } else {
                setPasswordError('password must have at least 6 characters');
            }
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        setContactsData(() => inputData)
    }

    const toggleInput = () => {
        setInputType(!input_type);
    };

    return (
        <div className="login">
            <MachmakingInput
                name={'email'}
                value={inputData.email}
                checkInputLength={handleChange}
                checkInputBlurLength={handleChange}
                span={'Email'}
                error={emailError}
                isDay={isDay}
            />
            <MachmakingInput
                iconClass={'fas fa-lock'}
                name={'password'}
                type={input_type && `password`}
                toggleInput={toggleInput}
                value={inputData.password}
                checkInputLength={handleChange}
                checkInputBlurLength={handleChange}
                span={'Password'}
                showPassword={true}
                error={passwordError}
                isDay={isDay}
            />
            <SubmitButton value={'Sign in'} className={'loginSubmit'} submit={handleSubmit} />
        </div>
    )
}

export default Login
