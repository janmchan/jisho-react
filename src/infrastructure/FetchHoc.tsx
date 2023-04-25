import React, { ComponentType, useEffect, useState, FC } from 'react';

interface Post {
  id: number;
  name: string;
  email: string;
  body: string;
}
export interface FetchProps {
  fetchProps: FetchSub
}
export interface FetchSub {
  isLoading: boolean;
  data: Post[];
  error: any;
}

interface FetchHOCProps {
  url: string;
  options?: RequestInit;
  includeParams?: boolean;
  WrappedComponent: ComponentType<any>;
}

const fetchHOC = ({
  url,
  options,
  includeParams = false,
  WrappedComponent,
}: FetchHOCProps): FC => {
  const FetchComponent: FC = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
      
      const fetchUrl = includeParams ? `${url}?${new URLSearchParams(options as any).toString()}` : url;
      console.log(`fetch ${fetchUrl}`);
      const fetchData = async () => {
        try {
          console.log(`fetch inside`);
          setIsLoading(true);
          const response = await fetch(fetchUrl, options);
          console.log(`fetch done`);
          const result = await response.json();
          console.log(`result ${result}`);
          setData(result);
        } catch (err) {
          console.log(`got error ${err}`);
          setError(err);
        } finally {
          console.log(`stop loading`);
          setIsLoading(false);
        }
      };
      console.log(`starting fetch`);
      fetchData();
    }, [url, options, includeParams]);

    return (
      <WrappedComponent
        {...(props as any)}
        fetchProps={{ isLoading, data, error }}
      />
    );
  };
  return FetchComponent;
};

export default fetchHOC;