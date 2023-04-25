import React, { FC, useState, useEffect } from "react";
import fetchHOC, {FetchProps} from './infrastructure/FetchHoc';
import ListGroup from 'react-bootstrap/ListGroup';

const API_URL = `https://jsonplaceholder.typicode.com/posts/1/comments`;
interface Props {
    // define props needed for your component
  }
const SearchBoxComponent: FC<FetchProps> = ({isLoading, data, error}) => {
    
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if(!data)
    {
        return <div>No Data!</div>;
    }
    return <ListGroup>
    {
        !data.length ? (<ListGroup.Item>No items</ListGroup.Item>) :
        (data.map((item) => 
        <ListGroup.Item as="li">
            <div>
                <div className="fw-bold">{item.name}</div>
                {item.email}
            </div>
             </ListGroup.Item>) )
    }
    </ListGroup>
  };
  
  const SearchBox = fetchHOC({
    url: API_URL,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify({}),
    },
    includeParams: false,
    WrappedComponent: SearchBoxComponent,
  });
  
export default SearchBox;
