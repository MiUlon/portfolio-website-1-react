import { Fragment, useState } from 'react';
import HeroImage from '../../assets/hero.png';

const Icons = () => {
    const [activeClass, setActiveClass] = useState('active');
    const [activeClass1, setActiveClass1] = useState('');
    const [activeClass2, setActiveClass2] = useState('');
    const [activeClass3, setActiveClass3] = useState('');
    const [activeClass4, setActiveClass4] = useState('');
    const [activeClass5, setActiveClass5] = useState('');

    const [classValue, setClassValue] = useState('active-btn');
    const [classValue1, setClassValue1] = useState('');
    const [classValue2, setClassValue2] = useState('');
    const [classValue3, setClassValue3] = useState('');
    const [classValue4, setClassValue4] = useState('');
    const [classValue5, setClassValue5] = useState('');

    const changeClassOnClick1 = () => {
        setClassValue('');
        setClassValue1('');
        setClassValue2('');
        setClassValue3('');
        setClassValue4('');
        setClassValue5('');

        setClassValue1('active-btn');

        setActiveClass('');
        setActiveClass1('');
        setActiveClass2('');
        setActiveClass3('');
        setActiveClass4('');
        setActiveClass5('');

        setActiveClass1('active');
    };

    const changeClassOnClick2 = () => {
        setClassValue('');
        setClassValue1('');
        setClassValue2('');
        setClassValue3('');
        setClassValue4('');
        setClassValue5('');

        setClassValue2('active-btn');

        setActiveClass('');
        setActiveClass1('');
        setActiveClass2('');
        setActiveClass3('');
        setActiveClass4('');
        setActiveClass5('');

        setActiveClass2('active');
    };

    const changeClassOnClick3 = () => {
        setClassValue('');
        setClassValue1('');
        setClassValue2('');
        setClassValue3('');
        setClassValue4('');
        setClassValue5('');

        setClassValue3('active-btn');

        setActiveClass('');
        setActiveClass1('');
        setActiveClass2('');
        setActiveClass3('');
        setActiveClass4('');
        setActiveClass5('');

        setActiveClass3('active');
    };

    const changeClassOnClick4 = () => {
        setClassValue('');
        setClassValue1('');
        setClassValue2('');
        setClassValue3('');
        setClassValue4('');
        setClassValue5('');

        setClassValue4('active-btn');

        setActiveClass('');
        setActiveClass1('');
        setActiveClass2('');
        setActiveClass3('');
        setActiveClass4('');
        setActiveClass5('');

        setActiveClass4('active');
    };

    const changeClassOnClick5 = () => {
        setClassValue('');
        setClassValue1('');
        setClassValue2('');
        setClassValue3('');
        setClassValue4('');
        setClassValue5('');

        setClassValue5('active-btn');

        setActiveClass('');
        setActiveClass1('');
        setActiveClass2('');
        setActiveClass3('');
        setActiveClass4('');
        setActiveClass5('');

        setActiveClass5('active');
    };

    return (
        <Fragment>
            <div className={`header section sec1 ${activeClass} ${activeClass1}`}>
                <div className='header-content'>
                    <div className='left-header'>
                        <div className='h-shape'></div>
                        <div className='image'>
                            <img src={HeroImage} alt="hero" />
                        </div>
                    </div>
                    <div className='right-header'>
                        <h1 className='name'>
                            Hi! I'm <span>Vardis Pavardis</span>.
                            A Web Developer.
                        </h1>
                        <p>
                            I love to create beautiful and functional websites.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dolore deleniti voluptatem cum mollitia atque aspernatur hic, voluptates nisi
                            doloribus? Voluptatum expedita accusamus earum. Ab laboriosam aut alias accusamus eaque?
                        </p>
                        <div className="btn-container">
                            <a href="" className='main-btn'>
                                <span className='btn-text'>Download CV</span>
                                <span className='btn-icon'><i className='fas fa-download'></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className={`section sec2 about ${activeClass2}`}>
                    <div className="main-title">
                        <h2>About <span>me</span><span>my stats</span></h2>
                    </div>
                    <div className="about-container">
                        <div className="left-about">
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ea, tenetur harum doloribus quisquam culpa tempora ipsa maiores
                                accusantium placeat temporibus cumque ab exercitationem rerum sapiente, recusandae quia autem? Natus?
                            </p>
                            <div className="btn-container">
                            <a href="" className='main-btn'>
                                <span className='btn-text'>Download CV</span>
                                <span className='btn-icon'><i className='fas fa-download'></i></span>
                            </a>
                        </div>
                        </div>
                        <div className="right-about">
                            <div className="about-item">
                                <div className="about-text">
                                    <p className="large-text">560+</p>
                                    <p className="small-text">Portfolio <br /> completed</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="about-text">
                                    <p className="large-text">10+</p>
                                    <p className="small-text">Years of <br /> experience</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="about-text">
                                    <p className="large-text">400+</p>
                                    <p className="small-text">Happy <br /> clients</p>
                                </div>
                            </div>
                            <div className="about-item">
                                <div className="about-text">
                                    <p className="large-text">300+</p>
                                    <p className="small-text">5 stars <br /> reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`section sec3 about ${activeClass3}`}></div>
                <div className={`section sec4 about ${activeClass4}`}></div>
                <div className={`section sec5 about ${activeClass5}`}></div>
            </div>
            <div className='controls'>
                <div className={`control control-1 ${classValue} ${classValue1}`} onClick={changeClassOnClick1}>
                    <i className="fa-solid fa-house"></i>
                </div>
                <div className={`control control-2 ${classValue2}`} onClick={changeClassOnClick2}>
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className={`control control-3 ${classValue3}`} onClick={changeClassOnClick3}>
                    <i className="fa-solid fa-suitcase"></i>
                </div>
                <div className={`control control-4 ${classValue4}`} onClick={changeClassOnClick4}>
                    <i className="fa-solid fa-newspaper"></i>
                </div>
                <div className={`control control-5' ${classValue5}`} onClick={changeClassOnClick5}>
                    <i className="fa-solid fa-address-book"></i>
                </div>
            </div>
        </Fragment>
    );
};

export default Icons;