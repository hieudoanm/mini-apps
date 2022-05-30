import get from 'lodash/get';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Coins from '../components/Coins';
import useAxios from '../hooks/useAxios';
import { Coin } from '../types';

const NEXT_PUBLIC_COIN_RANKING_KEY =
  process.env.NEXT_PUBLIC_COIN_RANKING_KEY || '';
const NODE_ENV = process.env.NODE_ENV || 'development';

const Home: NextPage = () => {
  const { query } = useRouter();
  const devAPI = `http://localhost:3000/api/coins?tags=${query.tags || ''}`;
  const proAPI = `https://api.coinranking.com/v2/coins?tags=${
    query.tags || ''
  }`;
  const url = NODE_ENV === 'development' ? devAPI : proAPI;
  const xAccessToken =
    NODE_ENV === 'development' ? '' : NEXT_PUBLIC_COIN_RANKING_KEY;
  const { data, loading, error } = useAxios(url, {
    headers: { 'x-access-token': xAccessToken },
  });

  if (loading) {
    return <></>;
  }

  if (error) {
    const errorMessage: string = get(error, 'message', 'Error');
    return (
      <div className="container mx-auto p-8">
        <div className="border rounded p-4 text-center">{errorMessage}</div>
      </div>
    );
  }

  const coins: Coin[] = get(data, 'data.coins', []);

  return (
    <div className="container mx-auto p-8">
      <Coins coins={coins} />
    </div>
  );
};

export default Home;
