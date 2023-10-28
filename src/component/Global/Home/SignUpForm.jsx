import React, {useState} from "react";
import styles from "./From.module.css";
import { useNavigate } from "react-router-dom";
const SignUpFrom = () => {
    const [fromValues , setFromValues] = useState({
        check: false,
        name:"",
        username:"",
        mail:"",
        mobile:"",
    });
    const [nameError , setNameError] = useState(false);
    const [usernameError , setUserNameError] = useState(false);
    const [mailError , setMailError] = useState(false);
    const [mobileError , setMobileError] = useState(false);
    const [signUpError , setSignUpError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFromValues({ ...formValues,[e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;
        if(!(formValues.name.trim().length > 0)) {
            setNameError(true);
            valid = false;
        }else {
            setNameError(false);
        }
        if(!(formValues.username.trim().length > 0)) {
            setUserNameError(true);
            valid = false;
        }else {
            setUserNameError(false);
        }
        if(!(formValues.mail.trim().length > 0)) {
            setMailError(true);
            valid = false;
        }else {
            setMailError(false);
        }
        if(!(formValues.mobile.trim().length > 0)) {
            setMobileError(true);
            valid = false;
        }else {
            setMobileError(false);
        }
        if(!formValues.check){
            setSignUpError(true);
            valid = false;
        }else {
            setSignUpErorr(false);
        }
        if(valid){
            window.localStorage.setItem("userData", JSON.stringify(formValues));
            navigate("/genre");
        }
    };
    
    return(
        <div className={styles.body}>
            <p className={styles.super}>super App</p>
            <p>create a new Account</p>
            <p>
                Email <span style={{color: "green"}}>|</span> Google
            </p>
            <form>
                <input
                 onChange={(e) => handleChange(e)}
                 type="text"
                 name="name"
                 placeholder="Name"
                ></input>
                {nameError ?(
                    <p className={styles.error}> Please fil correctly</p>
                ) : (
                    <></>
                )}
                <input
                 onChange={(e) => handleChange(e)}
                 type="text"
                 name="username"
                 placeholder="UserName"
                ></input>
                {userNameError ?(
                    <p className={styles.error}> Please fil correctly</p>
                ) : (
                    <></>
                )}
                <input
                 onChange={(e) => handleChange(e)}
                 type="email"
                 name="mail"
                 placeholder="Email"
                ></input>
                {mailError ?(
                    <p className={styles.error}> Please fil correctly</p>
                ) : (
                    <></>
                )}
                  <input
                 onChange={(e) => handleChange(e)}
                 type="tel"
                 name="mobile"
                 placeholder="Mobile"
                ></input>
                {mobileError ?(
                    <p className={styles.error}> Please fil correctly</p>
                ) : (
                    <></>
                )}
                <label>
                    <input
                        onChange={(e) =>
                            setFromValues({
                                ...formValues,
                                [e.target.name]:e.target.checked,
                            })
                        }
                        type="checkbox" 
                        name= "check"/>
                </label>
                {signUpError ? <p className={styles.error}>Please tick this</p> :<></>}
                <button type="submit" onClick={(e) => handleSubmit(e)}>
                SIGN UP 
                </button>
                <footer className={styles.footer}>
                    <p>
                        By clicking on Sign up. you agree to superapp
                        <span style={{ color:"green"}}> Terms and Conditions of Use</span>
                    </p>
                    <p>
                        To learn more about how superapp collects , uses, shares and protects your personal data please head superapp
                        <span style={{ color:"green"}}> Privacy Policy</span>
                    </p>
                </footer>
                
            </form>
        </div>
    );

};

export default SignUpForm;