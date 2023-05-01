import { useState, useEffect } from "react";

type ValidUrl = {
  url?: `https://${string}`;
  localDataSource?: string;
};

function useFetch<T>({ url, localDataSource }: ValidUrl) {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    const fetchData = () => {
      fetch(url! || localDataSource!)
        .then((response) => response.json())
        .then((result) => {
          if (mounted) {
            setData(result);
            setLoading(false);
          }
        })
        .catch((error: { message: string }) => {
          setError(error.message);
          setLoading(false);
        });
    };
    fetchData();

    return () => {
      !mounted;
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
