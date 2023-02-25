import React,{useEffect,useState} from 'react';
import style from './App.css'
import Cards from './Cards/Cards'
import Pagination from './Pagination/Pagination';
import Search from './Search.js/Search';


 



const App = () => {
  let [posts, setPosts] = useState([]);
  let [search,setSearch] = useState("")
  let [pageNumber,setPageNumber] = useState(1)
  let {info , results} = posts;
  
  let api = (`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`)
  
   useEffect(() => {  
      fetch(api)
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, [api]);
 
   const changeHandler = (event) => {
      setSearch(event.target.value)

   }

   
  return (
     

<div className={style.cards}>

   <Search setPageNumber={setPageNumber } setSearch={setSearch } />
<div className={style.card}>
<Cards posts={posts.results}  /> 
</div>


<Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} info={info} />
  
       
    </div>
  );
};
   
export default App;