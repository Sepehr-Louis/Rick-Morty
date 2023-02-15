import React,{useEffect,useState} from 'react';
import Characters from './Characters';
import style from './App.css'



const App = () => {
  const [posts, setPosts] = useState([]);
  const [search,setSearch] = useState("")
   useEffect(() => {
      fetch("https://rickandmortyapi.com/api/character")
         .then((response) => response.json())
         .then((data) => {
            console.log(data.results);
            setPosts(data.results);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
 
   const changeHandler = (event) => {
      setSearch(event.target.value)

   }

   const SerchCharacter = posts.filter(post => post.name.toLowerCase().includes(search.toLowerCase()) )
   
  return (
     

    <>
<input className="search" type="search" placeholder="Search..." value={search} onChange={changeHandler}   />


    {
       SerchCharacter.map(post => <Characters 
         key={post.id}
         name={post.name}
         species={post.species}
         status={post.status}
         image={post.image}
       
       
       
       
       
       />)
    }
   
    
       
    </>
  );
};

export default App;