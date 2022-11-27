import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../components/css/style2.css';
import './Register';
 
import { ThemeProvider, createTheme } from "@aws-amplify/ui-react";
import { studioTheme } from './ui-components';

const updatedTheme = createTheme({
    // Extend the theme to update the button color
    name: "my-theme-updates", 
    tokens: {
        components: {
            button: {
                primary: {
                    backgroundColor: {
                        value: "#b71c1c"
                    },
                },
            },
        },
    },
}, studioTheme)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={updatedTheme}>
        <LoginForm
    onSubmit={(fields) => {
        // Example function to trim all string inputs
        const updatedFields = {}
        Object.keys(fields).forEach(key => {
            if (typeof fields[key] === 'string') {
                updatedFields[key] = fields[key].trim()
            } else {
                updatedFields[key] = fields[key]
            }
        })
        return updatedFields
    }}
/>
    </ThemeProvider>
);
 
export default Login