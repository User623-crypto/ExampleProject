import React from 'react'
import Cart from '../Container/Cart'
import classes from './Item.module.css'


// const data={
//     number:1,
//     name:'Game',
//     author:'George',
//     numberOfPages:257,
//     country:'Albania',
//     released:'Thu Aug 01 1996'

// }
const Item = (props) => {
    return (
        <Cart>
            <div >
            <div className={classes.title}>
                <span>Book {props.num}</span>
                <b>{props.data.name}</b>
            </div>
            <div className={classes.listContainer}>
                <div className={classes.list}>
                    <div >👨 {props.data.name}</div>
                    <div>📖 {props.data.numberOfPages} pages</div>
                    <div>🏘 {props.data.country}</div>
                    <div>⏰ {props.date}</div>
                </div>
            </div>
            </div>
        </Cart>
    )
}

export default Item
