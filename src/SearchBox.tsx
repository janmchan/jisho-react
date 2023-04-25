import React, { FC, useState, useEffect } from "react";
import fetchHOC, {FetchProps} from './infrastructure/FetchHoc';

const API_URL = `https://jsonplaceholder.typicode.com/posts/1/comments`;
interface Props {
    // define props needed for your component
  }
const SearchBoxComponent: FC<FetchProps> = (fetchObj) => {
    
    const { isLoading, data, error } = fetchObj.fetchProps;
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
    return <div>Here is your data: {JSON.stringify(data)}</div>;
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
