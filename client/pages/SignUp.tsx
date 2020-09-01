import * as React from "react";
import SignUp from "../components/signup/SignUp";
import Head from "next/head";
import Layout from "../components/layout/Layout";


const SignUpPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>SignUp</title>
            </Head>
            <Layout>
                <SignUp/>
            </Layout>
        </>
    );
};

export default SignUpPage;
