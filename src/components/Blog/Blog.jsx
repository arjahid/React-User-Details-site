import { useLoaderData } from "react-router-dom";
import BlogDetails from "../BlogDetails/BlogDetails";


const Blog = () => {
    const blog=useLoaderData();
    console.log('blog',blog);
    // const blogStyle = {
    //     display: 'grid',
    //     gridTemplateColumns: 'repeat(3, 1fr)',
    //     gap: '10px',
    //     backgroundColor: 'lightblue',
    //     padding: '10px',
    //     border: '1px solid black',
        
    
    // };
    const blogContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // Creates 3 equal columns
        gap: '10px',
        backgroundColor: 'lightblue',
        padding: '10px',
        border: '1px solid black',
    };
    
    
    return (
        <div>
           <h2>i am form blog {blog.length}</h2> 
           <div style={blogContainerStyle}>
            {
                blog.map(blog=><BlogDetails key={blog.id}blog={blog} ></BlogDetails>)
            }
           </div>
        </div>
    );
};

export default Blog;