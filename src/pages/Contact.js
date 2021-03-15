import React, { useEffect, useState } from 'react';
import '../styles/Contact.css'
import { Prompt } from 'react-router-dom'


let messageInterval;

const Contact = () => {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState(false);
    const [contentError, setContentError] = useState(false);
    const [emailError, setEmailError] = useState(false);

    const messages = {
        nameIncorrect: "The name must have more than 3 signs and don't have space...",
        contentIncorrect: "The content must have more than 5 signs...",
        emailIncorrect: "The email has to have '@' , '.' and more than 5 signs...",
    }

    const formValidation = () => {
        let nameError = false;
        let contentError = false;
        let emailError = false;
        let correct = false;

        if (name.length > 3 && name.indexOf(' ') === -1) {
            nameError = true;
        }
        if (content.length > 5) {
            contentError = true;
        }
        if (email.length > 5 && email.indexOf('@') !== -1 && email.indexOf('.') !== -1) {
            emailError = true;
        }
        if (nameError && contentError && emailError) {
            correct = true;
        }

        return (
            {
                nameError,
                contentError,
                emailError,
                correct,
            }
        )
    }

    const handleOnChange = e => {
        if (e.target.type === "text") {
            setName(e.target.value)
        }
        if (e.target.type === "email") {
            setEmail(e.target.value)
        }
        if (e.target.type === "textarea") {
            setContent(e.target.value)
        }
    }


    const handleOnSubmit = e => {
        e.preventDefault();

        const valid = formValidation();

        if (valid.correct) {
            setName('');
            setEmail('');
            setContent('');
            setMessage('Form sent succesful!');
            setNameError(false);
            setContentError(false);
            setEmailError(false);
            messageInterval = setTimeout(() => setMessage(''), 4000);

        } else {
            setNameError(!valid.nameError);
            setContentError(!valid.contentError);
            setEmailError(!valid.emailError);
        }

    }

    useEffect(() => {
        return function cleanInterval() {
            clearTimeout(messageInterval);
        }
    }, [])

    const isGood = name && content && email ? true : false;

    return ( 
        <div className='content'>
            <h2>Write to me!</h2>
            <span>Here you can write to me about cooperation</span>
            <form onSubmit={handleOnSubmit} noValidate>
                    <label htmlFor="name">Name: 
                        <input onChange={handleOnChange} value={name} id="name" type="text"/><p>{nameError && messages.nameIncorrect}</p>
                    </label>
                    <label htmlFor="desc"><span>Description:</span>
                        <textarea onChange={handleOnChange} value={content} id="desc" cols="20" rows="10"></textarea><p>{contentError && messages.contentIncorrect}</p>
                    </label>
                    <label htmlFor="mail">Email:
                        <input onChange={handleOnChange} value={email} id="mail" type="email"/><p>{emailError && messages.emailIncorrect}</p>
                    </label>
                    <button>Send</button>
                </form>
                <Prompt 
                    when={isGood}
                    message="Masz niewypełniony formularz. Czy na pewno chcesz opuścić stronę?"
                />
                {<p className='sent'>{message}</p>}
        </div>
     );
}
 
export default Contact;