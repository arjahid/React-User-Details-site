import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const User = ({user}) => {
    const {name,username,email}=user; 
    const userCard={
        border:'1px solid black',
        padding:'10px',
        margin:'10px',
        backgroundColor:'lightgray',
        flexGrow:1, display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center' // Center items vertically
    
    }
    const navigatte=useNavigate();
    const handleAddress=()=>{
        navigatte(`/user/${user.id}`);
    }
    return (
        <div style={userCard}>
            <h3>Name:{name}</h3>
            <p>UserName:{username}</p>
            <p><small>Email:{email}</small></p>
            <button onClick={handleAddress}>Addres</button>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.object.isRequired,
}
export default User;