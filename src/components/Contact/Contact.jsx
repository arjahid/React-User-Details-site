import { useLoaderData } from "react-router-dom";
import MealDetails from "../MealDetails/MealDetails";


const Contact = () => {
    const meal=useLoaderData();
    const {categories}=meal
    const milContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Creates 3 equal columns
        gap: '10px',
        backgroundColor: 'lightblue',
        padding: '10px',
        border: '1px solid black',
    };
    return (
        <div>
            <h2>I am from meal: {categories.length}</h2>
            <div style={milContainerStyle}>
                {
                    categories.map(category=><MealDetails key={category.idCategory} meal={category}></MealDetails>)
                }
            </div>
        </div>
    );
};

export default Contact;