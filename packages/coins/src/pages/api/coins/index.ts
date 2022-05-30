import get from 'lodash/get';
import { NextApiRequest, NextApiResponse } from 'next';
import { CoinTag } from '../../../types';
import { axiosGet } from '../../../utils/axios';

const NEXT_PUBLIC_COIN_RANKING_KEY =
  process.env.NEXT_PUBLIC_COIN_RANKING_KEY || '';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const tags: CoinTag = get(request, 'tags', '');
  const url = `https://api.coinranking.com/v2/coins?tags=${tags}`;
  const coinsResponse = await axiosGet(url, {
    headers: { 'x-access-token': NEXT_PUBLIC_COIN_RANKING_KEY },
  });
  return response.json(coinsResponse);
};

export default handler;
