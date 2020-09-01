import * as React from "react";
import SignUp from "../components/signup/SignUp";
import Head from "next/head";
import Layout from "../components/layout/Layout";
import {SignUpRequest} from "../models/request/SignUpRequest";
import useUserService from "../service/UserService";
import {useSnackbar} from "notistack";


const SignUpPage: React.FC = () => {

    const service = useUserService();
    const snackBar = useSnackbar();

    const signUp = (request: SignUpRequest) => {
        service.signUp(request)
            .then(() => snackBar.enqueueSnackbar(`You're ready to start using dev-platform!`, {
                variant: 'success',
            }))
            .catch(() => snackBar.enqueueSnackbar(`Hold up, we've hit an issue here!`, {
                variant: 'error',
            }));
    };

    return (
        <>
            <Head>
                <title>SignUp</title>
            </Head>
            <Layout>
                <SignUp onSignUp={signUp}/>
            </Layout>
        </>
    );
};

export default SignUpPage;
