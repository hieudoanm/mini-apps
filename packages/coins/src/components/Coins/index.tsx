import React from 'react';
import { usdFormatter } from 'shared';
import { Coin } from '../../types';
import List from '../List';

const Coins: React.FC<{ coins: Coin[] }> = ({ coins = [] }) => {
  return (
    <>
      {coins.map((coin: Coin) => {
        const { uuid, name, price, iconUrl, coinrankingUrl, marketCap } = coin;
        return (
          <List.Item key={`coin-${uuid}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div
                  className="w-4 h-4 sm:w-8 sm:h-8 bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${iconUrl})` }}
                />
                <a href={coinrankingUrl} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </div>
              <div className="text-right">
                <span className="block sm:inline">
                  <b>{usdFormatter(parseFloat(price))}</b>
                </span>
                <span className="block sm:inline ml-1">
                  <small>({usdFormatter(parseFloat(marketCap))})</small>
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
