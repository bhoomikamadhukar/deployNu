import React from 'react'

const LoadMoreBtn =({result, page, load, handleLoadMore}) => {
    return( 
        <>
        {
            result < 3 *(page-1)? '': !load &&  <button className="btn btn-dark" onClick={handleLoadMore}>Load More</button>
        }
       
        </>
    )
}

export default LoadMoreBtn