import { useEffect, useState } from "react";
import axios from "axios";

export default function useCustomHookAwaitAxios<T extends { id: number }>(
  baseUrl: string
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get<{ results: T[] }>(baseUrl);
        setData(response.data.results);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [baseUrl]);

  const createData = async (newData: Omit<T, "id">, urlExtension: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post<T>(
        `${baseUrl}/${urlExtension}`,
        newData
      );
      setData([response.data, ...data]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createDataWithToken = async (
    newData: T,
    urlExtension: string,
    token: string
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post<T>(
        `${baseUrl}/${urlExtension}`,
        newData,
        {
          headers: {
            AuthorizationToken: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setData([...data, response.data]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (updatedData: Omit<T, "id">, id: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put<T>(`${baseUrl}/${id}`, updatedData);

      setData(
        data.map((elemento) => (elemento.id == id ? response.data : elemento))
      );
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (id: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put<T>(`${baseUrl}/${id}`);

      setData(data.filter((elemento) => elemento.id != id));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    createData,
    createDataWithToken,
    updateData,
    deleteData,
  };
}
