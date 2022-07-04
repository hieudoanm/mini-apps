import { AxiosRequestConfig } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { axiosGet } from '../../libs/axios';

type UseAxios<T> = { loading: boolean; error: any; data: T | null };

export const useAxios = <T>(
  url: string,
  configs: AxiosRequestConfig = {}
): UseAxios<T> & { refetch: () => void } => {
  const [state, setState] = useState<UseAxios<T>>({
    loading: false,
    error: null,
    data: null,
  });

  const [refetchIndex, setRefetchIndex] = useState<number>(0);

  const refetch = useCallback(() => setRefetchIndex((prev) => prev + 1), []);

  useEffect(() => {
    const getData = async () => {
      setState({ loading: true, error: null, data: null });
      try {
        const data: T = await axiosGet<T>(url, configs);
        setState({ loading: false, error: null, data });
      } catch (error) {
        console.error(error);
        setState({ loading: false, error, data: null });
      }
    };
    getData();
  }, [refetchIndex]);

  return { ...state, refetch };
};

export default useAxios;
