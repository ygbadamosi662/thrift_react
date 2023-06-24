import React from 'react'
import ThriftInShort from './ThriftInShort'

function ThriftList({thrifts}) {
  return (
    <div>
      { thrifts ?
        thrifts.map((thrift, index) => {
          return <ThriftInShort key={index} thrift={thrift}/>
        })
        : <h2>Nothing to see here....</h2>
      }
    </div>
  )
}

export default ThriftList