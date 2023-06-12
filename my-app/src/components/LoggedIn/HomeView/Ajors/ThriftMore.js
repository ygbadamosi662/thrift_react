import React from 'react'
import Member from './Member'
import Hub from './Hub'


function ThriftMore({members, hubs, cancel, thrift}) {
  return (
    <div>
        <div>
            {console.log(thrift?.ticket)}
            <h3>Ticket: {thrift?.ticket}</h3>
            <h3>Thrift start: {thrift?.thrift_start}</h3>
            <h3>Slots: {thrift?.slots}</h3>
            <h3>Term: {thrift?.term}</h3>
        </div>

        <div>
            <h4>Organizer</h4>
            <h4>Name: {thrift?.organizer.fname + " " + thrift?.organizer.lname}</h4>
            <h4>Contact: Email: {thrift?.organizer.email+" "} Phone: {thrift?.organizer.phone}</h4>
        </div>

        <div className='members'>
            {
                members?.map((member, index) => <Member member={member} key={index}/>)
            }
        </div>

        <div className='hub'>
        {
                hubs?.map((hub, index) => <Hub hub={hub} key={index}/>)
            }
        </div>
    </div>
  )
}

export default ThriftMore