import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users=useLoaderData();
    const usersContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Creates 3 equal columns
        gap: '10px',
        backgroundColor: 'lightblue',
        padding: '10px',
        border: '1px solid black',
    };
    return (
        <div>
            <h2>I am from users {users.length}</h2>
            <div style={usersContainerStyle}>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;