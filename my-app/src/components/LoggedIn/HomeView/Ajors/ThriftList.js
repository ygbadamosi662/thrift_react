import React from 'react'
import Thrift from './Thrift'

function ThriftList({thrifts, em}) {
  return (
    <div>
      { thrifts ?
        thrifts?.map((thrift, index) => {
          return <Thrift key={index} thrift={thrift}/>
        })
        : <h2>Nothing to see here....</h2>
      }
    </div>
  )
}

export default ThriftList