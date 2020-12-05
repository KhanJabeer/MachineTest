import React from 'react';
import './Pagination.css';


export const PaginationHelper={

  checkingPaginationProcess : (pageNumber,click_data,totalnumbers,posts,postsPerPage,currentPage) => {

    var totalmovedpage=Math.ceil(pageNumber/5)-1;//to find where the pagenumber falls in which row
    var totalpagerow=Math.ceil(Math.ceil(posts.length/postsPerPage)/5);//to find how much rows we have
    var checkcurrentnumber=(totalmovedpage*5)+1;
    var checkcurrentnumbermax=(totalmovedpage+1)*5;
    var checkcomingundermax=(currentPage>=checkcurrentnumber&&currentPage<=checkcurrentnumbermax);
    
    if(click_data){
      return {'pageNumber':pageNumber,'totalmovedpage':totalmovedpage,'click':true}
    }
    if((totalmovedpage==0&&checkcomingundermax)||(totalmovedpage==(totalpagerow-1)&&checkcomingundermax)){
      return {};
    }
   return {'pageNumber':pageNumber}
  }
}

const Pagination = ({ postsPerPage, totalPosts, paginate,pageNo,udpatePageNumber,paginationIndex,updatePaginationIndex }) => {
  
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
const totalpaginationdivideLength=Math.ceil(pageNumbers.length/5);

return (
  
      <div className='pagination'>
  

      <a onClick={()=>updatePaginationIndex&&updatePaginationIndex(paginationIndex>1?paginationIndex-1:0,pageNumbers.length)} className="page_icon">&laquo;</a>

       <a onClick={()=>udpatePageNumber&&paginate(pageNo>0?pageNo-1:1)} className="page_text">Previous</a>

        {JSON.parse(JSON.stringify(pageNumbers)).splice(paginationIndex*5,5).map(number => (
          <div key={number} className={`page_no ${pageNo==number?'active':''}`}>
            <a onClick={() => paginate(number)}  className='pageno_link'>
              {number}
            </a>
          </div>
        ))}

       <a onClick={()=>udpatePageNumber&&paginate((pageNo<pageNumbers.length)?(pageNo+1):pageNumbers.length)} className="page_text">Next</a>

       <a onClick={()=>updatePaginationIndex&&updatePaginationIndex(paginationIndex<totalpaginationdivideLength-1?paginationIndex+1:totalpaginationdivideLength-1,pageNumbers.length)} className="page_icon">&raquo;</a>
         
      </div>
  
  );
};

export default Pagination;