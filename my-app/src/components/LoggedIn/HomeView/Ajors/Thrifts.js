import { React, useState, useEffect } from "react";
import { useMutation } from "react-query";
import { appAx } from "../../../AppAxios";
import ThriftList from "./ThriftList";
import ThriftMore from "./ThriftMore";
import { connect } from "react-redux";
import { setThrift } from "../../../../Redux/Thrift/thriftActions";

const getEm = (dto) => {
  return appAx.post("http://127.0.0.1:8080/api/v1/thrift/userthrifts", dto);
};

const getMembers = (dto) => {
  return appAx.post("http://127.0.0.1:8080/api/v1/thrift/members", dto);
};

const getThriftHub = (ticket) => {
  console.log(typeof ticket)
  return appAx.get("http://127.0.0.1:8080/api/v1/thrift/payHistory", {
    params: { ticket: ticket },
  });
};

const panel = "active";
const MORE = "MORE";
const LESS = "LESS";

function Thrifts({ em, reduxMoreOrLess, reduxThrift, reduxSetThrift }) {
  const fromGetEm = useMutation(getEm);
  const fromGetMembers = useMutation(getMembers);
  const fromGetThriftHub = useMutation(getThriftHub);

  const [choice, setChoice] = useState(panel);

  // const [MOL, setMOL] = useState(reduxMore)

  const handleClick = (event) => {
    setChoice(event.target.value);
  };

  useEffect(() => {
    if (reduxMoreOrLess === LESS) {
      fromGetEm.mutate({ email: em });
    }

    if (reduxMoreOrLess === MORE) {
      fromGetMembers.mutate({ ticket: reduxThrift.ticket });
      fromGetThriftHub.mutate(reduxThrift.ticket);
    }
  }, [em, reduxThrift]);

  if (
    fromGetEm.isLoading ||
    fromGetMembers.isLoading ||
    fromGetThriftHub.isLoading
  ) {
    return <h2>Loading...</h2>;
  }

  if (fromGetEm.isError) {
    console.log(fromGetEm.error);
  }

  if (fromGetMembers.isError) {
    console.log(fromGetMembers.error);
  }

  if (fromGetThriftHub.isError) {
    console.log(fromGetThriftHub.error);
  }

  if (reduxMoreOrLess === LESS) {
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
        {/* <div>

          </div> */}
        {(() => {
          switch (choice) {
            case "active":
              return (
                <ThriftList
                  thrifts={fromGetEm.data?.data.Running?.thrifts}
                  email={em}
                />
              );
            case "pending":
              return (
                <ThriftList
                  thrifts={fromGetEm.data?.data.Awaiting?.thrifts}
                  email={em}
                />
              );
            case "completed":
              return (
                <ThriftList
                  thrifts={fromGetEm.data?.data.Completed?.thrifts}
                  email={em}
                />
              );
            default:
              return (
                <ThriftList
                  thrifts={fromGetEm.data?.data.Completed?.thrifts}
                  email={em}
                />
              );
          }
        })()}
      </div>
    );
  }

  if (reduxMoreOrLess === MORE) {
    return (
      <ThriftMore
        members={fromGetMembers.data?.data}
        hubs={fromGetThriftHub.data?.data}
        cancel={reduxSetThrift}
        thrift={reduxThrift}
      />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reduxSetThrift: (thri, mOl) => dispatch(setThrift(thri, mOl)),
  };
};

const mapStateToProps = (state) => {
  return {
    reduxThrift: state.thrifts.thrift,
    reduxMoreOrLess: state.thrifts.MoL,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Thrifts);
