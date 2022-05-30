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

export enum Tag {
  'DAO' = 'dao',
  'DEFI' = 'defi',
  'DEX' = 'dex',
  'EXCHANGE' = 'exchange',
  'GAMING' = 'gaming',
  'LAYER_1' = 'layer-1',
  'LAYER_2' = 'layer-2',
  'MEME' = 'meme',
  'METAVERSE' = 'metaverse',
  'NFT' = 'nft',
  'PRIVACY' = 'privacy',
  'STABLECOIN' = 'stablecoin',
  'STAKING' = 'staking',
  'WRAPPED' = 'wrapped',
}
