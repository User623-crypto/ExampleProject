import Header from "./components/Normal/Header";
import classes from './App.module.css'
import Item from "./components/Normal/Item";
import { useState } from "react";
import CardSkeleton from "./components/Skeleton/CardSkeleton";
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function App() {

  const [book, setBook] = useState([])

  const [hasData, sethasData] = useState(false)
  const [isLoading, setisLoading] = useState(false)

const fetchDataButtonHandler =async e=>{
  if(isLoading) return;
  setisLoading(true)
  try {
    const response = await fetch('https://www.anapioficeandfire.com/api/books?pageSize=30');
    const data =await response.json();
    console.log(data);
    data.sort((item1,item2)=>{
      return  item1.released<item2.released
    })
    setisLoading(false)
    setBook(data)
    sethasData(true)
  } catch (error) {
    console.log(error)
  }
  
 

}

const sortData = (asc)=>{
    if (asc) {
      setBook(prevData=>{
         prevData.sort((item1,item2)=>{
          return  item1.released>item2.released
        })
        return [...prevData];
      })
    }else{
      setBook(prevData=>{
         prevData.sort((item1,item2)=>{
          return item1.released<item2.released
        })
        return [...prevData];
      })
    }
}
  return (
    <div className={classes.main}>
     <Header fetchData={fetchDataButtonHandler} sortData={sortData} hasData={hasData}/>
     {/* <CardSkeleton /> */}
     <div className={classes.container}>
       {/* <Item data={data} />
       <Item data={data} />
       <Item data={data} />
       <Item data={data} />
       <Item data={data} />
       <Item data={data} />
       <Item data={data} /> */}
         { isLoading?<>
         <CardSkeleton />
         <CardSkeleton />
         <CardSkeleton />
         <CardSkeleton />
         <CardSkeleton />
         <CardSkeleton />
         </>
         :
         book.map((item,id)=>{
           let releasedDate= new Date(item.released).toLocaleDateString("en-US",options);

         return (<Item data={item} key={id} num={id+1} date={releasedDate}/>)
       })}
       {/* <Cart>
         <ul>
           <li>Number1</li>
           <li><b>name(title)</b></li>
           <li>authors[0](author)</li>
           <li>numberOfPages</li>
           <li>country</li>
           <li>released</li>
         </ul>
       </Cart> */}
     </div>
     
    </div>
  );
}

export default App;
