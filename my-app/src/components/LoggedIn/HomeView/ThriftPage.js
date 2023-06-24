import { React, useEffect } from "react";
import { useMutation } from "react-query";
import { connect } from "react-redux";
import ThriftMoreOrg from "./Ajors/ThriftMoreOrg"
import ThriftMoreThrifter from "./Ajors/ThriftMoreThrifter";
import { ifMember } from "../../ApiCalls";
import ThriftNoneMember from "./Ajors/ThriftNoneMember";
import Navi from "../Navi";


const THRIFTER = "THRIFTER";
const ORGANIZER = "ORGANIZER";

function ThriftPage({reduxTicket, reduxUser})
{
  const fromIfMember = useMutation(ifMember);
  console.log(reduxTicket);
  useEffect(() => {
    fromIfMember.mutate(reduxTicket)
  }, [reduxTicket]);

  console.log(fromIfMember.data?.data)

  if(fromIfMember.isError)
  {
    console.log(fromIfMember.error);
  }

  if(fromIfMember.data?.data?.isMember)
  {
    return (
      <div>
        <Navi/>
        {reduxUser.role === THRIFTER && <ThriftMoreThrifter/>}
        {reduxUser.role === ORGANIZER && <ThriftMoreOrg/>}
      </div>
      
    )
    
  }
  
  if(fromIfMember.data?.data?.isMember === false)
  {
    return (
      <div>
        <Navi/>
        <ThriftNoneMember/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      reduxUser: state.user.user,
      reduxTicket: state.thrifts.ticket
    };
  };
  
export default connect(mapStateToProps, null)(ThriftPage);