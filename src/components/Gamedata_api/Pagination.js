// import React, { useEffect, useState } from 'react'

// const Pagination = () => {

//     const [gamecard, SetGamecard]=useState([]);
//     const [currentpage,setCurrentpage]=useState(1);
//     const [postperpage,setPostperpage]=useState(10);
//     const GetData= async()=>{
//         const Gamedata=await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json");
//         const Data=await Gamedata.json();
//         SetGamecard(Data);
//         console.log(gamecard);
//     }
//     useEffect(()=>{
//         GetData();
//     })
//     // cuurent post
//     const indexOfLastPost=currentpage*postperpage;
//     const indexOffFirstPost=indexOfLastPost-postperpage;
//     const currentposts=gamecard.slice(indexOffFirstPost,indexOfLastPost);
//     // btns and all for pagination]
//     // the totalsize has to be main gamecard
//     const Totalposts=gamecard.length;
//     const Pagenumbers=[];
//     for(let i=1;i<=Math.ceil(Totalposts/postperpage);i++){
//         Pagenumbers.push(i);
//     }

//     // paginate function
//     const Paginate=(val)=>setCurrentpage(val);
//   return (
//     <>
//     <div className="gametitle">
//         {
//             currentposts.map((val)=>{
//                 return (
//                     <>
//                     <h6>{val.title}</h6>
//                     </>
//                 )
//             })
//         }
//     </div>
//     <div>
//     {
//               Pagenumbers.map((val)=>{
//                 return (
//                     <>
//                     <button onClick={()=>Paginate(val)}>{val}</button>
//                     </>
//                 )
//               })  
//             }
//     </div>
//     </>
//   )
// }

// export default Pagination