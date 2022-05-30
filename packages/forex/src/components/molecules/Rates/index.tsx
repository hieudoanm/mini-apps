import { ForexRate } from '../../../types';
import { currencyFormatter } from '../../../utils/currency-formatter';
import List from '../List';

const Rates: React.FC<{ rates: ForexRate[] }> = ({ rates }) => {
  return (
    <List>
      <List.Header>
        <h1 className="uppercase text-center text-2xl">Forex</h1>
      </List.Header>
      {rates.map((item) => {
        const { code, currency, rate } = item;
        return (
          <List.Item key={`code-${code}`}>
            <div className="flex justify-between items-center">
              <div>
                <b>{code}</b> - {currency}
              </div>
              <div>{currencyFormatter(rate)}</div>
            </div>
          </List.Item>
        );
      })}
    </List>
  );
};

export default Rates;
