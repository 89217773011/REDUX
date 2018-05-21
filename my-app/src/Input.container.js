import React, { Component } from 'react';
import { Styles } from './Styles.container.css'

class Input extends Component {
    render() {
        return (
                <div>
                    <input type = 'text' className = 'main-input'/>
                    <input type = 'submit' className = 'main-button'/>
                </div>
            );
        }
    }
    
export default Input;