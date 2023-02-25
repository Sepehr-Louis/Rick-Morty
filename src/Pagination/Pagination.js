import React from 'react';
import ReactPaginate from 'react-paginate';
import style from '../Pagination/Pagination.module.css'

const Pagination = ({info,pageNumber,setPageNumber}) => {
     console.log(info)

    return (
        <ReactPaginate
        className="pagination"
        forcePage={pageNumber===1? 0 :pageNumber - 1}
        nextLabel="Next"
        previousLabel="Prev"
        nextClassName={style.btn}
        previousClassName={style.btn}
        pageClassName={style.item}
        pageLinkClassName=""
        pageRangeDisplayed={5}
        activeClassName="active"
        onPageChange={(data) => {
            setPageNumber(data.selected + 1)
            console.log(data)
            console.log(pageNumber)
        }}
         pageCount={Math.ceil(info?.pages)} /> 
    );  
    
};

export default Pagination;