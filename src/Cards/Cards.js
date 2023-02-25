import React from 'react';
import style from '../Cards/Cards.module.css'
const Cards = ({posts,results}) => {
    
    let display;
console.log(posts)
return (
    <div className={style.cardsContainer}>
        {posts && posts.map((x) => {
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
                    </div>
                    {status === "Dead" &&  <div className={style.badge}>{status}</div> }
                    {status === "Alive" &&  <div className={style.badge2}>{status}</div> }
                    {(status !== "Dead" && status !== "Alive") &&  <div className={style.badge3}>{status}</div> }
                </div>  
                </div>
              
            </div>
          


        })

    } 
    </div>
)
    }
export default Cards;