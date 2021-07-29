import React from 'react'
import classes from './Header.module.css'

const Header = (props) => {

    const buttonHandler = (e)=>{
        props.fetchData(e);
    }
    return (
        <div className={classes.main}>
            <h1>Game of Thrones Books</h1>
            <div className={classes.side}>Fetch a list from an API and display it</div>
            <div style={{display:'flex'}}>
            {props.hasData && <button onClick={()=>{
                props.sortData(true)
            }} className={classes.button}>Ascending</button>}
            <button onClick={buttonHandler} className={classes.button}>Fetch Data</button>
         
            {props.hasData &&<button onClick={()=>{props.sortData(false)}} className={classes.button}>Descending</button>
}
            </div>
        </div>
    )
}

export default Header
