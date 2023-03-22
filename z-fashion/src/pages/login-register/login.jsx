import React, {Fragment} from 'react';
import MetaTags from "react-meta-tags";
import Header from "../../container/header/index";
import Footer from "../../container/footer/index";
import LoginCompo from '../../components/login/login';



const Login = () => {
    return (
        <Fragment>
            <MetaTags>
            <title> Z Fashion | Blog </title>
            </MetaTags>
            <Header />
           
            <LoginCompo />
          
            <Footer />
        </Fragment>
    );
};

export default Login;

