import React, { useState } from 'react'
import { search} from '../../ApiCalls';
import { useMutation } from 'react-query';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchList from './SearchList';
import { setTicket } from '../../../Redux/Thrift/thriftActions';


function Search({reduxSetTicket}) {

    const fromLive = useMutation(search);

    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    const handleChange = event => {
        setSearchValue(event.target.value);
        fromLive.mutate(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        reduxSetTicket(searchValue);
        navigate("thrift");
    }

    if(fromLive.isError)
    {
        console.log(fromLive.error);
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='search' onChange={handleChange} value={searchValue}/>
            <button type='submit' className='searchButton'>Search</button>
        </form>
        {
            fromLive.data?.data ? <SearchList items={fromLive.data?.data}/> : ''
        }
    </div>
  )
}

const mapDispatchToProps = dispatch => {
    return {
      reduxSetTicket: (ticket) => dispatch(setTicket(ticket))
    }
  }
  
export default connect(null, mapDispatchToProps)(Search);
