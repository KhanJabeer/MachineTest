import React, { useState, useEffect } from 'react';
import  './PostMaster.css';
import Pagination from '../Pagination/Pagination';
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";


const PostMaster = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [hasError, setErrors] = useState(false);

  const [userDetails,setUserDetails] = useState([]);
  const [loggedInUser,setLoggedInUser] = useState(null)


  useEffect(() => {

    const fetchPosts = async () => {
      setLoading(true);
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      res.json()
      .then(res => setPosts(res))
      .catch(err => setErrors(err)); 
      setLoading(false);
     
    };

    fetchPosts();
    loadUserDetails();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts && posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  const loadUserDetails = () => {
   
    if(localStorage.users) {
      const user = JSON.parse(localStorage.getItem("users"))
      setUserDetails(user)
    }

    if(localStorage.loggedInUser) {
      const user = JSON.parse(localStorage.getItem("loggedInUser"))
      setLoggedInUser(user)
     
    }
  }

  return (
    <div className='container mt-5'>
        <div className="post_title">
          {/* <div>Users List</div> */}
        <Link to="/dashboard" className="link_header">DashBoard</Link>
        <Link to="/post" className="link_header">Users List</Link>
        {loggedInUser && loggedInUser.role !== "user" &&<Link to="/usermanage" className="link_header">User Management</Link>}
        </div>
        <table className="table_style">
            <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>Email Id</th>
            </tr>
            
            {currentPosts && currentPosts.map(currentPosts => (
            
            <tr>
            
                <td>{currentPosts.name}</td>
                <td>{currentPosts.username}</td>
                <td>{currentPosts.email}</td>
            
            </tr>
            ))} 
        
    </table>
   
     
    
   
   
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts && posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default PostMaster;