import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='mb-4 text-white'>Blogs</h1>
            <div className='mb-5'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Difference between authorization and authentication?</Accordion.Header>
                        <Accordion.Body>
                            In the authentication process the identity of users are checked for providing the access to the system.While in authorization process users authorities are checked for accessing the resources.Authentication is done before the authorization process.While authorization needs the users privilege or security levels.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                            Firebase Authentication provides backend services,easy-to-use SDKs and ready0made UI libraries to authenticate users to your app. It supports authentication using passwords,phone numbers,popular federated identity providers like Google,Facebook and Twitter and more.
                            There is a lot of alternatives to implement authentication without firebase.Like Auth0,MongoDb,Passport,Okta,Keycloak,Amzon Cognito,OAuth2 etc.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                        <Accordion.Body>
                            There are many services which firebase provides other than authentication.Like Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging and more.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Blogs;