import React from 'react';
import styles from '../Search.js/Search.module.css'
const Search = ({setSearch,setPageNumber}) => {
    return (
        
            <form className={styles.Search}>
                <input onChange={(e) =>{
                  
                    setSearch(e.target.value)
                }}
                
                type="text" placeholder="Search for Characters" className={styles.input} />
                <button onClick={e => {e.preventDefault()}} className={styles.btn}>Search</button>
            </form>
        
    );
};

export default Search;