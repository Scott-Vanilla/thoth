import React, {useState} from "react";
import { Image, Text, Button } from "@geist-ui/core";
import FadeIn from "react-fade-in";
import logo from "../../assets/thoth-logo.png";
import SingleInputForm from "../../components/SingleInputForm/SingleInputForm";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const LogIn = () => {

    const navigate = useNavigate();
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const registerHandler = () => {
        axios.post('https://0fubn14hlc.execute-api.eu-west-1.amazonaws.com/dev/register', {
            name:name,
            username:username,
            password:password
          })
          .then(function (response) {
            console.log(`New user created: ${response}`);
            navigate('/');
          })
          .catch(function (error) {
            console.log(error);
          });
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
              <Text p>Please register using your details.</Text>
            </div>
            <SingleInputForm customOnChange={(value)=>setName(value)} label="Name"/>
            <SingleInputForm customOnChange={(value)=>setUsername(value)} label="Email"/>
            <SingleInputForm customOnChange={(value)=>setPassword(value)} label="Password"/>
            <div className="thoth__landing-page__button">
                <Button onClick={registerHandler}>Register Me</Button>
            </div>
            <div className="thoth__landing-page__button">
            <Link to="/login">
                <Button>Back to Login</Button>
                </Link>
            </div>
            <div className="thoth__landing-page__button">
            <Link to='/'>
                <Button>Back to Homepage</Button>
            </Link>
            </div>
            </div></FadeIn></div>
    )
}

export default LogIn;