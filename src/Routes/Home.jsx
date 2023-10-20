import React, { useState, useEffect, useRef } from 'react'
import styles from '../css_modules/home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
//Assets
import img from '../img/gui.png'
import '../Components/ToggleSwitch.css'
//Custom component
import Footer from '../Components/Footer'
import ToggleSwitch from '../Components/ToggleSwitch'
import FileSaver from 'file-saver'
const Home = () => {
    const [trackMouse, setTrackMouse] = useState(true);
    const [isToggleOn, setIsToggleOn] = useState(false);
    const ref = useRef(null);


    const handleToggleChange = () => {

        setIsToggleOn(!isToggleOn);
        setTrackMouse(!trackMouse);
        console.log(trackMouse);
    };

    const handleDownload = () => {
        const url = `http://localhost:3000/application/test.txt`;
        const link = document.createElement('a');
        const fileName = url.split('/').pop();
        link.href = url;

        link.setAttribute("download", fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    useEffect(() => {
        const handleMouseMove = (event, element) => {


            if (trackMouse) {
                const { clientX, clientY } = event;
                const middleX = window.innerWidth / 2;
                const middleY = window.innerHeight / 2;
                const offsetX = ((clientX - middleX) / middleX) * 45;
                const offsetY = ((clientY - middleY) / middleY) * 45;

                element.style.transform = `perspective(1000px) rotateX(${-1 * offsetY}deg) rotateY(${offsetX}deg)`;
                element.style.transition = 'all 0.1s ease';
                // console.log(element);
                // console.log(element.style.transform);
                // console.log(event);
                // console.log(clientX);
            }
            else {
                element.style.transform = `perspective(1000px) rotateX(10deg) rotateY(30deg)`;
                element.style.transition = 'all 0.5s ease-in-out';
                // console.log(element[0].style.transform);
            }

        };
        const element = ref.current;
        // const polyCard = document.getElementsByClassName('polyCard');
        document.addEventListener('mousemove', (event) => handleMouseMove(event, element));

        return () => {
            element.removeEventListener('mousemove', (event) => handleMouseMove(event, element));

        };
        // const polyCard = document.getElementsByClassName('polyCard');
        // document.addEventListener('mousemove', (event) => handleMouseMove(event, polyCard));
        // return () => {
        //     polyCard.removeEventListener('mousemove', (event) => handleMouseMove(event, polyCard));
        // };
    }, [trackMouse]);
    return (
        <>
            <section className='p-lg-5 p-3'>
                <Container className='p-lg-5 p-3'>
                    <Row className='g-4 d-flex'>
                        <Col xs={{ order: 'last' }} lg={{ span: 6, order: 'first' }} className='d-flex justify-content-center'>
                            <Container>
                            <div className='polyCard img-fluid' ref={ref} onClick={() => { handleToggleChange() }}>
                                {/* <Image src={img} className=''fluid /> */}

                            </div>
                            </Container>
                            {/* <div className='toggle-switch-container'>
                            <ToggleSwitch isOn={isToggleOn} onToggleChange={handleToggleChange}/>
                            </div> */}
                        </Col>
                        <Col xs={{ order: 'first' }} lg={{ span: 6, order: 'last' }}>
                            <h1 className='display-1 fw-bold text-white title'>Guess the Song!</h1>
                            <div className='paragraph'>
                                <p className='text-white' /* style={{ fontSize: '1rem', fontFamily: 'Prompt' }} */>This is a Java Program that I made to help me memorize the 20 classical music in our Art Appreciation Subject last year. </p>
                                <p className="text-white" /* style={{ fontSize: '1rem', fontFamily: 'Prompt' }} */>Features:</p>
                                <ul className='text-white'/*  style={{ fontSize: '1rem', fontFamily: 'Prompt' }} */>
                                    <li>File upload</li>
                                    <li>Play music</li>
                                    <li>Pause music</li>
                                    <li>Resume music</li>
                                    <li>Stop music</li>
                                    <li>List of titles</li>
                                    <li>Checks entered title</li>
                                    <li>Statistics view to see the Top 3 most memorized songs</li>
                                </ul>
                                <p className='text-white' /* style={{ fontSize: '1rem', fontFamily: 'Prompt' }} */>Minimum Requirements:</p>
                                <ul className='text-white' /* style={{ fontSize: '1rem', fontFamily: 'Prompt' }} */>
                                    <li>Java Runtime Environment (JRE) - 1.8 and above</li>

                                </ul>
                            </div>

                            {/* <button onClick={handleDownload}>Download here</button> */}
                            <Row className='g-4'>
                                <Col lg={6}>
                                <a href={`${process.env.PUBLIC_URL}/resource/Guessthesong.exe`} download="Guess the song.exe">
                                <button className='btn gradient-outline w-100 p-3 fw-bold' style={{ fontSize: '1.2rem' }}>Download</button>
                            </a>
                                </Col>
                                <Col lg={6}>
                                <a href="https://github.com/emmanyouwell/Guess-The-Song">
                                <button className='btn btn-outline-light w-100 p-3 fw-bold' style={{ fontSize: '1.2rem' }}>Source code</button>
                            </a>
                                </Col>
                            </Row>
                            <Row>
                                <p className='my-3 text-white'>If download button doesn't work, <a href="https://drive.google.com/drive/folders/1kENLvvIxQ0nl6dgAESUtF863odZ5J77D?usp=share_link">click here.</a></p>
                            </Row>
                           
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* <div className={`toggle-switch ${isToggleOn ? 'on' : 'off'}`} onClick={()=>{handleToggleChange()}}>
                <div className='toggle-switch-handle'></div>
            </div> */}
            <Footer />
        </>
    )
}

export default Home