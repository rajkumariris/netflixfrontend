function Pagination({increment, decrement,pageNo}){
    return(
        <div>
           <button onClick={increment}> increment</button>
           <div>
            {pageNo}
           </div>
           <button onClick={decrement}>decrement</button>
        </div>
    )
}
export default Pagination;