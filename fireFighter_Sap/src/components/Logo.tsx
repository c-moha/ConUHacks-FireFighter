import logo from '../assets/logo.png';

// Logo and title displayed at the top of the screen
const Logo = () => {
    return (
    <div>
        {/* Title in the middle of the top */}
        <h1
        style={{
            position: 'absolute',
            top: '25px',
            left: '50%',
            color: 'black',
            transform: 'translateX(-45%)',
            margin: 0,
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Tahoma, sans-serif',
        }}
        >
            Firefighter Deployment and Wildfire Management
        </h1>
        
        {/* Logo at the top right */}
        <div className="logo" style={{ position: 'absolute', top: '10px', right: '25px' }}>
        <img src={logo} alt="Logo" style={{ height: '70px', width: 'auto' }} />
        </div>
    </div>
    );
};

export default Logo;

