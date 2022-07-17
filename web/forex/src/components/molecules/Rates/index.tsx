import isNil from 'lodash/isNil';
import { vndFormatter } from '@package/shared';
import { ForexRate } from '../../../types';
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
                <span>
                  <b>{code}</b>
                </span>
                {!isNil(currency) && (
                  <span className="hidden sm:inline ml-1"> - {currency}</span>
                )}
              </div>
              <div>{vndFormatter(rate)}</div>
            </div>
          </List.Item>
        );
      })}
    </List>
  );
};

export default Rates;
