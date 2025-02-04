import { useLoaderData, useNavigate } from "react-router-dom";


const BlgDetail = () => {
    const navigate=useNavigate();
    const handleBack=()=>navigate(-1);
    const details=useLoaderData();
    const {name,email,body}=details;
    return (
        <div>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            <p><small>{body}</small></p>
            <button onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default BlgDetail;