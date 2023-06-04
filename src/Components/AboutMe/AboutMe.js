import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import img from '../../Images/LTN_6697.JPG';
import './AboutMe.css';

const AboutMe = () => {

    const [text, setText] = useState("");
    const [text1, setText1] = useState("");
    const [fullText, setFullText] = useState("Zia Sifat");
    const [fullText1, setFullText1] = useState("My goal is to be a professional web developer.I want to join as a developer in the top class and leading company of the world like Google,Microsoft,Intel etc.To achieve my goal i have to work hard.I have to practice a lot.I have to do a lot of professional projects and have to upgrade my skills.And also i have to develop my soft skills as well like Time management,Teamwork,Communication etc.I will be the best version of myself to achieve my goal");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 50)
        }
    }, [index]);

    useEffect(() => {
        if (index < fullText1.length) {
            setTimeout(() => {
                setText1(text1 + fullText1[index])
                setIndex(index + 1)
            }, 50)
        }
    }, [index])

    return (
        <div className='container'>
            <h1 className='text-black mb-4 '>About Me</h1>
            <div className='about-div'>
                <div className='me-5 w-25 mx-auto'>
                    <Card style={{ width: '10rem' }}>
                        <Card.Img variant="top" src={img} />

                    </Card>
                    <h2 className='name mt-2 w-50'>{text}</h2>
                </div>
                <div className='text-black w-50'>
                    <p>{text1}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;