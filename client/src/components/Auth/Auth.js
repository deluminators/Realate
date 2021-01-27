import React from 'react';
import styles from './Auth.module.css';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Logo from '../../assets/Logo.png';

function Auth({option = true}) {
    return (
        <div className={styles.Auth}>
            <div className={styles.left}>
                <img src={Logo} alt="Logo" className={styles.logo}/>
                <div className={styles.title}>What is Realate?</div>
                <div className={styles.content}>Real-time real-estate data prediction engine</div>
            </div>
            <div className={styles.right}>
                {
                    option ?
                    <SignIn />
                    :
                    <SignUp />
                }
            </div>
        </div>
    )
}

export default Auth
