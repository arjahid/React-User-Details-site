
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
const MealDetails = ({meal}) => {
    const {strCategory,strCategoryThumb,strCategoryDescription}=meal;
    const milCard={
        border:'1px solid black',
        padding:'10px',
        margin:'10px',
        backgroundColor:'lightgray',
        flexGrow:1, display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center' // Center items vertically
    
    }
    const notify = () => toast("Your order is accepcted !");
    return (
        <div style={milCard}>
            <h2>Name:{strCategory}</h2>
            <p><img src={strCategoryThumb} alt="" /></p>
            <p><small>{strCategoryDescription}</small></p>
            <div>
            <button onClick={notify}>Order Now</button>
            <ToastContainer />
            </div>
        </div>
    );
};
MealDetails.propTypes = {
    meal: PropTypes.object.isRequired,
}
export default MealDetails;