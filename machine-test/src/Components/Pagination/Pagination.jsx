import React from 'react';
import './Pagination.css';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
  
      <div className='pagination'>
        {pageNumbers.map(number => (
          <div key={number} className='page_no'>
            <a onClick={() => paginate(number)}  className='pageno_link'>
              {number}
            </a>
          </div>
        ))}
      </div>
  
  );
};

export default Pagination;