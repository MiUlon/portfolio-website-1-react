import './icons.styles.scss';

const Icons = () => {
    return (
        <div className='controls'>
            <div className='control control-1 active-btn'>
                <i className="fa-solid fa-house"></i>
            </div>
            <div className='control control-2'>
                <i className="fa-solid fa-user"></i>
            </div>
            <div className='control control-3'>
                <i className="fa-solid fa-suitcase"></i>
            </div>
            <div className='control control-4'>
                <i className="fa-solid fa-newspaper"></i>
            </div>
            <div className='control control-5'>
                <i className="fa-solid fa-address-book"></i>
            </div>
        </div>
    );
};

export default Icons;