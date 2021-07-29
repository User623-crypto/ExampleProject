import React from 'react'
import SkeletonElement from './SkeletonElement'
import classes from './CardSkeleton.module.css'

const CardSkeleton = () => {
    return (
        <div className={classes.main}>
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        </div>
    )
}

export default CardSkeleton
