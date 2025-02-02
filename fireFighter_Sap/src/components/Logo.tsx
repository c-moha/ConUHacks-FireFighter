import logo from '../assets/logo.png';

// Logo and title displayed at the top of the screen
const Logo = () => {
    return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Title in the middle of the top */}
        <h1
        style={{
            marginLeft: '25px',
            marginTop: '25px',
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Tahoma, sans-serif',
            color: 'black',
        }}
        >
            Firefighter Deployment and Wildfire Management
        </h1>
        
        {/* Logo at the top right */}
        <div className="logo" style={{ top: '10px', right: '25px' }}>
        <img src={logo} alt="Logo" style={{ height: '70px', width: 'auto' }} />
        </div>
    </div>
    );
};

export default Logo;

