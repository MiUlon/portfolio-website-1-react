import { useState } from 'react';
import './icons.styles.scss';

const Icons = () => {
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
    };

    const changeClassOnClick2 = () => {
        setClassValue('');
        setClassValue1('');
        setClassValue2('');
        setClassValue3('');
        setClassValue4('');
        setClassValue5('');

        setClassValue2('active-btn');    
    };

    const changeClassOnClick3 = () => {
        setClassValue('');
        setClassValue1('');
        setClassValue2('');
        setClassValue3('');
        setClassValue4('');
        setClassValue5('');

        setClassValue3('active-btn');    
    };

    const changeClassOnClick4 = () => {
        setClassValue('');
        setClassValue1('');
        setClassValue2('');
        setClassValue3('');
        setClassValue4('');
        setClassValue5('');

        setClassValue4('active-btn');    
    };

    const changeClassOnClick5 = () => {
        setClassValue('');
        setClassValue1('');
        setClassValue2('');
        setClassValue3('');
        setClassValue4('');
        setClassValue5('');

        setClassValue5('active-btn');    
    };

    return (
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
    );
};

export default Icons;