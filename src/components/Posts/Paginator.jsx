import class_name from './Post.module.css'
import React, {useState} from "react";
import cn from "classnames"

const Paginator=(props)=>{
    let portionSize = 10
    let pageCount = Math.ceil(props.totalPostsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize
    debugger
    return <div className={class_name.paginator}>
        { portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }

        {pages
            .filter(p => p >= leftPortionPageNumber && p<=rightPortionPageNumber)
            .map((p) => {
                return <span className={ cn({
                    [class_name.selectedPage]: props.currentPage === p
                }, class_name.pageNumber) }
                             key={p}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}
        { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }


    </div>
}

export default Paginator;