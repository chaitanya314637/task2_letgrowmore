import React from 'react';


const SearchBox=({searchfeild, searchChange})=>{
    return(
            <div className='pa2' >
                <input 
                className='grow pa3 w-20  ba b--white bg-light-gray
                '
                 type="search" 
                 placeholder='Search by name' 
                 onChange={searchChange}/>
            </div>
        );
}

export default SearchBox;
