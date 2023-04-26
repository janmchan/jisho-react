import React, { FC, useState } from "react";
import SearchSummary from "./SearchSummary";
type FormValues = {
  keyword: string;
};

const SearchBox: FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({ keyword: "" });
  const [searchWord, setSearchWord] = useState<string>("0");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchWord(formValues.keyword);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, keyword: event.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="keyword">Keyword:</label>
        <input
          id="keyword"
          type="text"
          value={formValues.keyword}
          onChange={handleNameChange}
        />
        <button type="submit">Submit</button>

      </form>
      <SearchSummary keyword={searchWord} />
    </>

  );

};

export default SearchBox;
