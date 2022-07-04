import CircularProgress from '@mui/material/CircularProgress';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import get from 'lodash/get';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import { useAxios } from 'shared';
import Coins from '../components/Coins';
import Container from '../components/Container';
import List from '../components/List';
import Navbar from '../components/Navbar';
import { Coin, Tag } from '../types';

const Home: NextPage = () => {
  const [params, setParams] = useState<{ tags: Tag }>({ tags: Tag.LAYER_1 });
  const url: string = `https://proxy-as-as-service.vercel.app/api/coins`;
  const { data, loading, error, refetch } = useAxios(url, { params });

  if (loading) {
    return (
      <>
        <Navbar />
        <Container>
          <List>
            <List.Header>
              <h1 className="text-2xl uppercase">Coins</h1>
            </List.Header>
            <List.Item className="flex items-center justify-center">
              <CircularProgress />
            </List.Item>
          </List>
        </Container>
      </>
    );
  }

  if (error) {
    const errorMessage: string = get(error, 'message', 'Error');
    console.error(error);
    return (
      <>
        <Navbar />
        <Container>
          <List>
            <List.Header>
              <h1 className="text-2xl uppercase">Coins</h1>
            </List.Header>
            <List.Item>
              <p>{errorMessage}</p>
            </List.Item>
          </List>
        </Container>
      </>
    );
  }

  const coins: Coin[] = get(data, 'data.coins', []);

  return (
    <>
      <Navbar />
      <Container>
        <List>
          <List.Header>
            <div className="flex justify-between items-center">
              <h1 className="text-xl uppercase">Coins ({coins.length})</h1>
              <div>
                <FormControl size="small">
                  <InputLabel id="label-tags">Tags</InputLabel>
                  <Select
                    labelId="label-tags"
                    id="tags"
                    value={params.tags}
                    label="Tags"
                    onChange={(event) => {
                      const tags = event.target.value as Tag;
                      setParams({ ...params, tags });
                      refetch();
                    }}
                  >
                    <MenuItem value={Tag.DAO}>
                      DAO
                      <span className="hidden sm:inline ml-1">
                        (Decentralized Autonomous Organization)
                      </span>
                    </MenuItem>
                    <MenuItem value={Tag.DEFI}>
                      DeFi
                      <span className="hidden sm:inline ml-1">
                        (Decentralized Finance)
                      </span>
                    </MenuItem>
                    <MenuItem value={Tag.DEX}>
                      DEX
                      <span className="hidden sm:inline ml-1">
                        (Decentralized Exchange)
                      </span>
                    </MenuItem>
                    <MenuItem value={Tag.EXCHANGE}>Exchange</MenuItem>
                    <MenuItem value={Tag.GAMING}>Gaming</MenuItem>
                    <MenuItem value={Tag.LAYER_1}>Layer 1</MenuItem>
                    <MenuItem value={Tag.LAYER_2}>Layer 2</MenuItem>
                    <MenuItem value={Tag.MEME}>Meme</MenuItem>
                    <MenuItem value={Tag.METAVERSE}>Metaverse</MenuItem>
                    <MenuItem value={Tag.NFT}>
                      NFT
                      <span className="hidden sm:inline ml-1">
                        (Non-fungible Token)
                      </span>
                    </MenuItem>
                    <MenuItem value={Tag.STABLECOIN}>Stable Coin</MenuItem>
                    <MenuItem value={Tag.STAKING}>Staking</MenuItem>
                    <MenuItem value={Tag.WRAPPED}>Wrapped</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </List.Header>
          <Coins coins={coins} />
        </List>
      </Container>
    </>
  );
};

export default Home;
