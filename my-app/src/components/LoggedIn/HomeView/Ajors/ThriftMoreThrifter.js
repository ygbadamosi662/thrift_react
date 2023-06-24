import { React, useEffect } from "react";
import { useMutation } from "react-query";
import { connect } from "react-redux";
import { getThrift, getMembers } from "../../../ApiCalls";
import MembersList from "../../Members/MembersList";



const stylez = {
    more: {
        display: 'flex',
        // justifyContent: 'space-between',
        gap: '10rem'
    }
};

const page = 0;

function ThriftMoreThrifter({ reduxTicket }) {

  const fromGetMembers = useMutation(getMembers);
  const fromGetThrift = useMutation(getThrift);

  useEffect(() => {
    fromGetThrift.mutate(reduxTicket);
    fromGetMembers.mutate({ticket: reduxTicket, page: page});
  }, [reduxTicket, page]);

  console.log(fromGetMembers.data)
  console.log("data here");
  

  const thrift = fromGetThrift.data?.data;
  const members = fromGetMembers.data?.data;

  if(fromGetThrift.isError)
  {
    console.log(fromGetThrift.error);
  }

  if(fromGetMembers.isError)
  {
    console.log(fromGetMembers.error);
  }

  return (
    <div className="more" style={stylez.more}>
      <div className="thrift_org">
        <div className="thrift">
          <h3>Ticket: {thrift?.ticket}</h3>
          <h3>Thrift start: {thrift?.thrift_start}</h3>
          <h3>Slots: {thrift?.slots}</h3>
          <h3>Term: {thrift?.term}</h3>
          <h3>Filled: {thrift?.how_full_in_perecentage+"%"}</h3>
        </div>

        <div className="org">
          <h4>Organizer</h4>
          <h4>Name: {thrift?.organizer.fname + " " + thrift?.organizer.lname}</h4>
          <h4>
            Contact: Email: {thrift?.organizer.email + " "} Phone:{" "}
            {thrift?.organizer.phone}
          </h4>
        </div>
      </div>

      <div className="members">
        <MembersList members={members}/>
        {/* Members
        {
          Array.isArray(members?.members) ? 
          members?.members?.map((member, index) => (
          <Member member={member} key={index} />
          )) : ''
        } */}
      </div>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    reduxTicket: state.thrifts.ticket
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     reduxLogUser: (user) => dispatch(logUser(user))
//   }
// }

export default connect(mapStateToProps, null)(ThriftMoreThrifter);