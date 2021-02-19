import React from 'react';

const Search = function ({handleFilter}) {
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('hi',e.target.value)
        handleFilter(e.target.value)
    }
    const debouncedSearch = (func, delay) => {
        let timer;
        return function (e) {
            clearTimeout(timer);
            timer=setTimeout(() => {
                func(e);
            },delay)
        }
    }
    return (
        <div className="searchContainer">
            <input placeholder="Search" onChange={e=>debouncedSearch(handleSearch,500)(e)} className="searchContainer_search" />
            <div onClick={()=>console.log('clicked')} className="searchContainer_advanceFilter">Advanced Filters</div>
        </div>
    )
}
export default Search;