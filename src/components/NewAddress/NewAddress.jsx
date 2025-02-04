import { useLoaderData, useNavigate } from "react-router-dom";


const NewAddress = () => {
    const navigate=useNavigate();
    const addres=useLoaderData();
    const {address}=addres;
    const {street,suite,city,zipcode}=address;
    console.log(address)
    const handleBack=()=>navigate(-1);
    return (
        <div>
            <h2>Address of user</h2>
            <p>Street:{street}</p>
            <p>Suite:{suite}</p>
            <p>City:{city}</p>
            <p>Zipcode:{zipcode}</p>
            <button onClick={handleBack}>Go Back</button>

            
        </div>
    );
};

export default NewAddress;