import React, {useState} from "react";
import { Image, Text, Button } from "@geist-ui/core";
import FadeIn from "react-fade-in";
import logo from "../../assets/thoth-logo.png";
import SingleInputForm from "../../components/SingleInputForm/SingleInputForm";
import { useNavigate } from "react-router-dom";

const LogIn = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const loginHandler = () => {

        console.log(username)
        console.log(password)
        if(username === "scottmac" && password === "123"){
            localStorage.setItem("user", username);
            localStorage.setItem("authToken", true);
            navigate('/')
        }

    }
    return(
        <div className="thoth__landing-page">
        <FadeIn>
          <div className="thoth__landing-page__container">
            <div className="thoth__landing-page__title">
              <Text h2>Thoth</Text>
            </div>
            <div className="thoth__landing-page__subtitle">
              <Text p>A platform for computational puzzles.</Text>
            </div>
            <div className="thoth__landing-page__logo">
              <Image width="280px" height="160px" src={logo} />
            </div>
            <div className="thoth__landing-page__subtitle">
              <Text p>Please login using your details.</Text>
            </div>
            <SingleInputForm customOnChange={(value)=>setUsername(value)} label="Username"/>
            <SingleInputForm customOnChange={(value)=>setPassword(value)} label="Password"/>
            <div className="thoth__landing-page__button">
                <Button onClick={loginHandler}>Login</Button>
            </div>
            <div className="thoth__landing-page__button">
                <Button>Create an account</Button>
            </div>
            </div></FadeIn></div>
    )
}

export default LogIn;