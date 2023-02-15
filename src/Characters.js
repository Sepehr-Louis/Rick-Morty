import React from 'react';
import style from './Character.module.css'

const Characters = ({name,species,image,status,key}) => {
    return (
        <div>
            
            <div className="container" key={key} >
            <div className="left">
                  <h2>Name : {name}</h2>
                  <h2>Species : {species}</h2>
                  <h2>Status : {status}</h2>
            </div>

            <div className="right">
                  <img src={image} ></img>
            </div>
        
       
    </div> 
        
        </div>
    );
};

export default Characters;