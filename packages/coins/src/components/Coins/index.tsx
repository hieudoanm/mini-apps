import React from 'react';
import { Coin } from '../../types';
import { currencyFormatter } from '../../utils/currency-formatter';
import List from '../List';

const Coins: React.FC<{ coins: Coin[] }> = ({ coins = [] }) => {
  return (
    <>
      {coins.map((coin: Coin) => {
        const { uuid, name, price, iconUrl, coinrankingUrl, marketCap } = coin;
        return (
          <List.Item key={`coin-${uuid}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="w-8 h-8 bg-cover bg-center"
                  style={{ backgroundImage: `url(${iconUrl})` }}
                ></div>
                <a href={coinrankingUrl} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </div>
              <div>
                <b>{currencyFormatter(parseFloat(price))}</b>
                <span className="ml-1">
                  ({currencyFormatter(parseFloat(marketCap))})
                </span>
              </div>
            </div>
          </List.Item>
        );
      })}
    </>
  );
};

export default Coins;
