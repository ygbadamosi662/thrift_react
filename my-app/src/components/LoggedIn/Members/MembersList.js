import React from 'react'
import Member from './Member'

function MembersList({members, setPage}) {
  console.log(members);
  const handleClick = (event) => {
    if(event.target.value === "prev")
    {
        setPage(prevPage => prevPage - 1);
    }

    if(event.target.value === "next")
    {
        setPage(prevPage => prevPage + 1);
    }
  }

  return (
    <div>
        <div>
            <button disabled={members?.hasPrevious === false && true} value="prev" onClick={handleClick}><h3>{"<"}</h3></button>
            <button disabled={members?.hasNext === false && true} value="next" onClick={handleClick}><h3>{">"}</h3></button>
        </div>
        Members
        {
          Array.isArray(members?.members) ? 
          members?.members?.map((member, index) => (
          <Member member={member} key={index} />
          )) : ''
        }
    </div>
  )
}

export default MembersList