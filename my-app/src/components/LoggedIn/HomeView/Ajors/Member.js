import React from 'react'

function Member({member}) {
  return (
    <div>
        <h4>Name: {member.member.fname+" "+member.member.lname}</h4>
        <div>
            <h2>Contact</h2>
            <div>
                <h4>Email: {member.member.email}</h4>
                <h4>Phone: {member.member.phone}</h4>
            </div>
            <h4>Slots: {member.slot}</h4>
        </div>

    </div>
  )
}

export default Member