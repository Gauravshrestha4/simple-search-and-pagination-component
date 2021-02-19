import React from 'react';

const Pagination = function ({ pages,setPageNo,pageNo }) {
    const handlePagination = (page) => {
        setPageNo(page)
    }
    let pageButtons=pages.map(page => 
        <div onClick={() => handlePagination(page)} className={`page ${pageNo==page? 'active':''}`} >{page}</div>
    )
    return (
        <React.Fragment>
            <div className="pagination">
                {pageNo > 1 && <div onClick={() => handlePagination(pageNo - 1)} className="page" >{'<'}</div>}
                
                {pageButtons}
                {pageNo < pages.length && <div onClick={() => handlePagination(pageNo + 1)} className="page" >{'>'}</div>}
                
            </div>
        </React.Fragment>
    )
}
export default Pagination;