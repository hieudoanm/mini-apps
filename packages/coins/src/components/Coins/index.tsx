import { Coin } from '../../types';
import { currencyFormatter } from '../../utils/currency-formatter';

const Coins: React.FC<{ coins: Coin[] }> = ({ coins = [] }) => {
  return (
    <div className="border rounded">
      {coins.map((coin: Coin) => {
        const { uuid, name, price, iconUrl, coinrankingUrl } = coin;
        return (
          <div key={`coin-${uuid}`} className="p-4 border-b">
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Coins;
