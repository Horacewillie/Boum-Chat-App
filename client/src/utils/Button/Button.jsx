/* eslint-disable react/prop-types */
import React from 'react';
//import { Link } from 'react-router-dom';
import styles from './Button.module.css';

function Button(props) {
    const buttons = () => {
        let template = '';

        switch (props.type) {
            case 'default':
                template = (
                    <div className={styles.defaultBtn}>{props.title}</div>
                );
                break;
            case 'exception':
                template = (
                    <div className={styles.exceptionBtn}>{props.title}</div>
                );
                break;
            default:
                template = '';
        }
        return template;
    };

    return <div className={styles.button}>{buttons()}</div>;
}


export default Button;
