import React, { useState, useEffect } from "react";

interface Post {
    id: number;
    name: string;
    email: string;
    body: string;
}


function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Post[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchData() {

        try
        {
            setLoading(true);
            setResults([]);

            const API_URL = `https://jsonplaceholder.typicode.com/posts/${query}/comments`;
            const response = await fetch(API_URL);
            setLoading(false);
            if(!response.ok)
            {
                setError("An error occurred while fetching the search results.");    
                setResults([]);
            }
            else
            {
                const data = await response.json();
                setResults(data);
                setError("");
            }

        }catch (error) {
            
            setError("An error occurred while fetching the search results.");
        }
     
    }
    fetchData();
  }, [query]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("doing stuff");
    setQuery(event.target.value);
  }

  return (
    <div>
        {loading && <h1>Loading...</h1>}
        {error && <p>{error}</p>}
      <input type="text" value={query} onChange={handleInputChange} />
      {results.map(post => 
        <div key={post?.name}>
        <h3>{post?.email}</h3>
        <p>{post?.body}</p>
      </div>)}
      
    </div>
  );
}

export default SearchBox;
