import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import { json } from "react-router-dom";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [erro, setErro] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setErro(null);
      setLoading(true);

      response = await fetch(url, options);
      json = await response.json();

      if (response.ok === false) throw new Error(json.message);
    } catch (error) {
      json = null;
      setErro(error.message);
    } finally {
      setData(json);
      setLoading(false);
      return {response, json}
    }
  }, []);

  return {
    data,
    erro,
    loading,
    request,
  };
};
