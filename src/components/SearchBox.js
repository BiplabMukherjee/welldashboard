import React from 'react';



const SearchBox = ({searchfield,searchChange}) =>{
    return(
        <div className='pa2'>
            <input className='pa2 ba b--green bg-lightest-blue br3' type='search' placeholder='search Wells' onChange={searchChange}/>
        </div>
        
    );
}

export default SearchBox;