import { NavLink } from "react-router-dom";


const Header = () => {
    const style = {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px',
        backgroundColor: 'lightblue'
    }
    return (
        <div>
            <nav style={style}>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/user'>User</NavLink>
               
            </nav>
        </div>
    );
};

export default Header;