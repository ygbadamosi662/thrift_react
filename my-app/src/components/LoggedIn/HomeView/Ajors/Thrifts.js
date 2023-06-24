import { React, useState, useEffect } from "react";
import { useMutation } from "react-query";
import ThriftList from "./ThriftList";
import { connect } from "react-redux";
import { getUserThrifts } from "../../../ApiCalls";


const panel = "active";

function Thrifts({reduxUser})
{
  const fromGetEm = useMutation(getUserThrifts);
  
  const [choice, setChoice] = useState(panel);


  const handleClick = (event) => {
    setChoice(event.target.value);
  };

  useEffect(() => {
    fromGetEm.mutate({ email: reduxUser.email });
  }, [reduxUser.email]);

  if (fromGetEm.isLoading) {
    return <h2>Loading...</h2>;
  }

  if (fromGetEm.isError) {
    console.log(fromGetEm.error);
  }

  
  
  return (
    <div>
      <div>
        <button onClick={(event) => handleClick(event)} value="active">
          Active
        </button>
        <button onClick={(event) => handleClick(event)} value="pending">
          Pending
        </button>
        <button onClick={(event) => handleClick(event)} value="completed">
          Completed
        </button>
      </div>
      
      {(() => {
        switch (choice) {
          case "active":
            return (
              <ThriftList
                thrifts={fromGetEm.data?.data.Running?.thrifts}
                email={reduxUser.email}
              />
            );
          case "pending":
            return (
              <ThriftList
                thrifts={fromGetEm.data?.data.Awaiting?.thrifts}
              />
            );
          case "completed":
            return (
              <ThriftList
                thrifts={fromGetEm.data?.data.Completed?.thrifts}
              />
            );
          default:
            return (
              <ThriftList
                thrifts={fromGetEm.data?.data.Completed?.thrifts}
              />
            );
        }
      })()}
    </div>
  );
  
}


const mapStateToProps = (state) => {
  return {
    reduxUser: state.user.user
  };
};

export default connect(mapStateToProps, null)(Thrifts);
