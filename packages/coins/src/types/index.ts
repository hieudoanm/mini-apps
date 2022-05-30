export type Coin = {
  btcPrice: string;
  change: string;
  coinrankingUrl: string;
  color: '#f7931A';
  iconUrl: string;
  listedAt: number;
  lowVolume: false;
  marketCap: string;
  name: string;
  price: string;
  rank: number;
  symbol: string;
  tier: number;
  uuid: string;
};

export enum CoinTag {
  'DEFI' = 'defi',
  'STABLECOIN' = 'stablecoin',
  'NFT' = 'nft',
  'DEX' = 'dex',
  'EXCHANGE' = 'exchange',
  'STAKING' = 'staking',
  'DAO' = 'dao',
  'MEME' = 'meme',
  'PRIVACY' = 'privacy',
  'METAVERSE' = 'metaverse',
  'GAMING' = 'gaming',
  'WRAPPED' = 'wrapped',
  'LAYER-1' = 'layer-1',
  'LAYER-2' = 'layer-2',
}
