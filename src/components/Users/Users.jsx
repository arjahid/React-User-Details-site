import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users=useLoaderData();
    return (
        <div>
            <h2>I am from users {users.length}</h2>
            <div>
                {
                    users.map(user=><User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;