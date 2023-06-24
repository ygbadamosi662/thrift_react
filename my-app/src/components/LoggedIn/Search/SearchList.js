import React from 'react'
import SearchItem from './SearchItem'


const stylex = {
   position: 'absolute',
   top: '4rem',
   paddingBottom: '0'
}

function SearchList({items}) {
  
  return (
    <div style={stylex}>
       {
          Array.isArray(items) ? (
              items.map((item, index) => (
                <SearchItem item={item} key={index} />
              ))
            ) : <h4>{items}</h4>
       }
    </div>
  )
}

export default SearchList