import React from 'react';
import style from '../Cards/Cards.module.css'
const Cards = ({posts,results}) => {
    
    let display;
console.log(posts)

    if (posts) {
        display = posts.map((x) => {
            let { id , name , image , location,status } = x;
            return <div className={style.Cards} key={id} >
                <div className={style.card}  >
                <div className={style.image}>
                    <img src={image} alt="" className="" />
                    <div className="content">
                        <div className style={{fontSize:"30px"}}>{name}</div>
                        <div className="">
                            <div className="" style={{fontSize:"18px"}}>Last location</div>
                            <div className="" style={{fontSize:"20px"}}>{location.name}</div>
                        </div>
                    </div>{( () =>{
                        if(status === "Dead"){
                            return(
                            <div className={style.badge}>{status}</div>)
                            
                        }
                        else if (status === "Alive"){
                            return(
                                <div className={style.badge2}>{status}</div>
                            )
                          
                        }
                        else{ 
                            return(
                                <div className={style.badge3}>{status}</div>
                            );
                       }
                    })()}
        
                    
                   
                </div>  
                </div>
              
            </div>
          


        })

    } 
    else{
        display = "No Characters Found"

    }
    return (
        <div>
            {display}
        </div>
    );
};

export default Cards;