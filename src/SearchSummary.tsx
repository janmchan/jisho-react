import { FC } from "react";
import fetchHOC, {FetchProps, Post} from './infrastructure/FetchHoc';
import ListGroup from 'react-bootstrap/ListGroup';


interface SearchSummaryProps {
    keyword:string;
}

const SearchSummaryComponent: FC<SearchSummaryProps & FetchProps> = ({keyword, isLoading, data, error}) => {
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
        ((data as Post[]).map((item) => 
        <ListGroup.Item as="li">
            <div>
                <div className="fw-bold">{item.name}</div>
                {item.email}
            </div>
             </ListGroup.Item>) )
    }
    </ListGroup>
  };

  //TODO: replace the post number based on the keyword
  let API_URL = `https://jsonplaceholder.typicode.com/posts/{postid}/comments`;
  const SearchSummary = fetchHOC({
    url: API_URL,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: JSON.stringify({}),
    },
    includeParams: false,
    WrappedComponent: SearchSummaryComponent,
  });
  
export default SearchSummary;
