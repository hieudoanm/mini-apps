import get from 'lodash/get';
import { useEffect, useState } from 'react';
import { currencies } from '../../../constants';
import { useAxios } from '../../../hooks/useAxios';
import { ForexRate } from '../../../types';
import Container from '../../atoms/Container';
import List from '../../molecules/List';
import Rates from '../../molecules/Rates';

const NEXT_PUBLIC_FIXER_KEY: string = process.env.NEXT_PUBLIC_FIXER_KEY || '';

const AxiosRates: React.FC = () => {
  const url = `https://proxy-as-as-service.vercel.app/api/forex`;
  const { data, loading, error } = useAxios(url);
  const [vndRates, setRates] = useState<ForexRate[]>([]);

  useEffect(() => {
    const success: boolean = get(data, 'success', false);
    if (success) {
      const base: string = get(data, 'base', '');
      const rates: Record<string, number> = get(data, 'rates', {});
      const codes: string[] = Object.keys(rates);
      const vndRates: ForexRate[] = codes
        .map((code) => {
          const codeRate = rates[code];
          const baseRate = rates[base];
          const vndRate = rates['VND'];
          const rate = (baseRate * vndRate) / codeRate;
          const currency: string = currencies[code];
          return { code, currency, rate };
        })
        .sort((a, b) => (b.rate > a.rate ? 1 : -1));
      setRates(vndRates);
    } else {
      setRates([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (loading) {
    return (
      <Container>
        <List>
          <List.Header>
            <h1 className="uppercase text-center text-2xl">Forex</h1>
          </List.Header>
          <List.Item>
            <p className="p-4 text-center">Loading</p>
          </List.Item>
        </List>
      </Container>
    );
  }

  if (error) {
    const errorMessage: string = get(error, 'message', 'Error');
    return (
      <Container>
        <List>
          <List.Header>
            <h1 className="uppercase text-center text-2xl">Forex</h1>
          </List.Header>
          <List.Item>
            <p className="p-4 text-center">{errorMessage}</p>
          </List.Item>
        </List>
      </Container>
    );
  }

  return (
    <Container>
      <Rates rates={vndRates} />
    </Container>
  );
};

export default AxiosRates;
