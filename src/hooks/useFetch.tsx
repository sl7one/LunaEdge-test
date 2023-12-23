import axios from "axios";
import React, { useEffect, useState } from "react";

interface IProps {
  url: string | string[];
  method: "get" | "all";
}

export default function useFetch({ url, method = "get" }:IProps) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios[method](url);
        setData(data.results);
      } catch (err) {
        if (err instanceof Error) {
          setErr(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return { data, isLoading };
}
