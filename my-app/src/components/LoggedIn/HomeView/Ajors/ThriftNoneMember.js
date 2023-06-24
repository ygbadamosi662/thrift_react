import React, {useEffect} from 'react';
import { useMutation } from 'react-query';
import { getThrift } from '../../../ApiCalls';
import { connect } from 'react-redux';

function ThriftNoneMember({reduxTicket}) {
    const fromGetThrift = useMutation(getThrift);
   
    useEffect(() => {
      fromGetThrift.mutate(reduxTicket)
    }, [reduxTicket]);
  
    const thrift = fromGetThrift.data?.data;
  
    if(fromGetThrift.isError)
    {
      console.log(fromGetThrift.error)
    }
  
    if(fromGetThrift.isLoading)
    {
      return <h2>Loading...</h2>
    }
  
    return (
      <div  >
        <div >
          <div className="thrift">
            <h3>Ticket: {thrift?.ticket}</h3>
            <h3>Thrift start: {thrift?.thrift_start}</h3>
            <h3>Slots: {thrift?.slots}</h3>
            <h3>Term: {thrift?.term}</h3>
            <h3>Filled: {thrift?.how_full_in_perecentage +"%"}</h3>
          </div>
  
          <div className="org">
            <h4>Organizer</h4>
            <h4>
              Contact: Email: {thrift?.org_email + " "} Phone:{" "}
              {thrift?.org_phone}
            </h4>
          </div>
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

export default connect(mapStateToProps, null)(ThriftNoneMember);