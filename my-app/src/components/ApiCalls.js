import { appAx } from "./AppAxios"

// Get requests
export const search = (ticket) => {
    return appAx.get('http://127.0.0.1:8080/api/v1/thrift/search',
     {params: {ticket: ticket}})
};

export const getThrift = (ticket) => {
    return appAx.get('http://127.0.0.1:8080/api/v1/thrift/getThrift',
     {params: {ticket: ticket}})
};

export const getPotHistory = ({ticket, page}) => {
    return appAx.get('http://127.0.0.1:8080/api/v1/thrift/potHistory',
     {params: {ticket, page}})
};

export const getPayHistory = ({ticket, page, thriftIndex}) => {
    return appAx.get('http://127.0.0.1:8080/api/v1/thrift/payHistory',
     {params: {ticket, page, thriftIndex}})
};

export const getMembers = ({ticket, page}) => {
    return appAx.get('http://127.0.0.1:8080/api/v1/thrift/members',
     {params: {ticket, page}})
};

export const getThriftHub = (ticket) => {
    return appAx.get("http://127.0.0.1:8080/api/v1/thrift/payHistory", {
      params: { ticket: ticket }
    });
};

export const ifMember = (ticket) => {
    return appAx.get('http://127.0.0.1:8080/api/v1/thrift/ifMember',
     {params: {ticket: ticket}})
};


// Post requests
export const fetchHome = () => {
    return appAx.post('http://127.0.0.1:8080/api/v1/user/home')
}

export const registerUser = (user) => {
    return appAx.post('http://127.0.0.1:8080/api/v1/user/auth/register', user)
};

export const loginUser = (user) => {
    return appAx.post("http://127.0.0.1:8080/api/v1/user/auth/login", user);
};

export const getUserThrifts = (dto) => {
    return appAx.post("http://127.0.0.1:8080/api/v1/thrift/userthrifts", dto);
};