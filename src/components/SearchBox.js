import React from 'react';

function SearchBox({searchChange}) {
    return (
        <div className='pa1'>
            <input 
                className='blue tc f3 ph4 pv1 b--transparent bg-lightest-blue br4 outline-0 '
                type='search' 
                placeholder='SearchRobots'
                onChange={searchChange}
            /> 
        </div> 
    );
}
export default SearchBox;
