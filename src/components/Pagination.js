import React from 'react';

const Pagination = function ({ pages,setPageNo }) {
    const handlePagination = (page) => {
        setPageNo(page)
    }
    let pageButtons=pages.map(page => 
        <button onClick={()=>handlePagination(page)} className="button" >{page}</button>
    )
    return (
        <React.Fragment>
            <div className="pagination">
            { pageButtons}
            </div>
        </React.Fragment>
    )
}
export default Pagination;