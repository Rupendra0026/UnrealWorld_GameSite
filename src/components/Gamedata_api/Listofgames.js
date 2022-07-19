import React, { useEffect,useState } from 'react'
// import ReactPaginate from 'react-paginate';
import './Listofgames.css'
const Listofgames = () => {

  // list the games
  const [gamecard, SetGamecard]=useState([]);
  const getGameData= async ()=>{
      const response= await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json');
      // console.log(response);
      const gamedata= await response.json();
      const Gamedone=gamedata.slice(1,99);
      // console.log(gamedata);
      SetGamecard(Gamedone);
  }
  useEffect(()=>{
    getGameData();
},[])
  // pagination part

    const [currentpage,setCurrentpage]=useState(1);
    const [postperpage,setPostperpage]=useState(9);
    // current post
    const indexOfLastPost=currentpage*postperpage;
    const indexOffFirstPost=indexOfLastPost-postperpage;
    const currentposts=gamecard.slice(indexOffFirstPost,indexOfLastPost);
    // page nums display
    const Pagenumbers=[];
    for(let i=1;i<=Math.ceil(gamecard.length/postperpage);i++){
        Pagenumbers.push(i);
    }
    // paginate function
    const paginate=(val)=>setCurrentpage(val);
    // to search 
const [searchterm,setSearchterm]=useState('');
  return (
    <>
    <div className="gamehead">
      <h1>Find the game and have the fun!!</h1>
    </div>
     <div className="searchbox">
      <input type="text" placeholder=' enter the name of the game!' onChange={event=>{setSearchterm(event.target.value)}} />
      </div>

    <div className="maingamedesign">
    {
        currentposts.filter((game)=>{
          if(setSearchterm===""){
            return game;
          }
          else if(game.title.toLowerCase().includes(searchterm.toLowerCase())){
            return game;
          }
        }).map((game,key)=>{
            const{title,platform,score,genre,editors_choice}=game;
            return(
                <>
               
                <div className="gamedesign" key={game.id}>
              <div className="gamecard">
            <div className="gamehead">
            <h2>{title}</h2>
           </div>
          <div className='details'>
          <h4><span>Platform:</span>{platform}</h4>
          <h4><span>Score:</span>{score}</h4>
          <h4><span>Genre:</span>{genre}</h4>
          <h5><span>Editors choice:</span>{editors_choice}</h5>
          </div>
    </div>
    </div>
                </>
            )
        })
    }
    </div>
    <div className='totalpages'>
    <div className="pagenumbers">
      {
        Pagenumbers.map((val)=>{
          return(
            <>
            <ul>
              <li><button className='num' onClick={()=>paginate(val)}>{val}</button></li>
            </ul>
            
            </>
          )
        })
      }
    </div>
    </div>
    </>
  )
}

export default Listofgames