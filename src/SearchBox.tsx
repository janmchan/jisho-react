import React, { FC, useState, useEffect } from "react";
import fetchHOC, {FetchProps} from './infrastructure/FetchHoc';
import ListGroup from 'react-bootstrap/ListGroup';
import SearchSummary from "./SearchSummary";


interface Props {
    // define props needed for your component
    keyword:string;
}

const SearchBox: FC = () => {
  const [text, setText] = useState<string>('');
  const [displayText, setDisplayText] = useState<string>('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayText(text);
  };

  return (
    <div>
      <label htmlFor="postId">Post Search</label>
      <input id="postId" type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleButtonClick}>Submit</button>
      <SearchSummary keyword={displayText} />
    </div>
  );
  
  };

  
export default SearchBox;
