
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const BlogDetails = ({blog}) => {
    const navigate=useNavigate();
    const handleView=()=>{
        navigate(`/blog/${blog.id}`);
    }
    const {id,name}=blog;
    const blogCard={
        border:'1px solid black',
        padding:'10px',
        margin:'10px',
        backgroundColor:'lightgray',
        flexGrow:1, display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center' // Center items vertically
    
    }
  

    return (
        <div style={blogCard}>
            <p>ID: {id}</p>
            <h2>Name: {name}</h2>
            <button onClick={handleView}>Show  more</button>
        </div>
    );
};
BlogDetails.propTypes = {
    blog: PropTypes.object.isRequired,

}
export default BlogDetails;