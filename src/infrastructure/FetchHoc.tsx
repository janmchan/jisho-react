import React, { ComponentType, useEffect, useState, FC } from 'react';

export interface Post {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface FetchProps {
  isLoading: boolean;
  data: Post[];
  error: any;
}

class FetchImp implements FetchProps {
  constructor(public isLoading: boolean, public data: Post[], public error : any) {}
}

interface FetchHOCProps {
  url: string;
  options?: RequestInit;
  includeParams?: boolean;
  WrappedComponent: ComponentType<any>;
}
interface SearchSummaryProps {
  // define props needed for your component
  keyword:string;
}

const fetchHOC = ({
  url,
  options,
  includeParams = false,
  WrappedComponent,
}: FetchHOCProps): FC<SearchSummaryProps> => {
  const FetchComponent: FC<SearchSummaryProps> = (props) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
      console.log(`props HOC ${JSON.stringify(props)}`)
      const fetchUrl = includeParams ? `${url}?${new URLSearchParams(options as any).toString()}` : url;
      
      const fetchData = async () => {
        try {
      
          setIsLoading(true);
          const response = await fetch(fetchUrl, options);
          const result = await response.json();
          console.log(`result ${result}`);
          setData(result);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchData();
    }, [url, options, includeParams]);

    let result = new FetchImp(isLoading, data, error)
    return (
      <WrappedComponent
        {...(props as any)}
        {...(result)}
      />
    );
  };
  return FetchComponent;
};

export default fetchHOC;