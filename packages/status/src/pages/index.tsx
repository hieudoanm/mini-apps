import { NextPage } from 'next';
import Atlassian from '../components/organisms/Atlassian';
import Bitbucket from '../components/organisms/Bitbucket';
import CircleCI from '../components/organisms/CircleCI';
import Confluence from '../components/organisms/Confluence';
import Discord from '../components/organisms/Discord';
import GitHub from '../components/organisms/GitHub';
import Hedera from '../components/organisms/Hedera';
import JiraSoftware from '../components/organisms/JiraSoftware';
import Solana from '../components/organisms/Solana';
import Trello from '../components/organisms/Trello';
import Vercel from '../components/organisms/Vercel';
import StatusTemplate from '../templates/StatusTemplate';

const HomePage: NextPage = () => {
  return (
    <StatusTemplate>
      <div className="w-full h-px bg-gray-200" />
      <Atlassian />
      <div className="w-full h-px bg-gray-200" />
      <Bitbucket />
      <div className="w-full h-px bg-gray-200" />
      <CircleCI />
      <div className="w-full h-px bg-gray-200" />
      <Confluence />
      <div className="w-full h-px bg-gray-200" />
      <Discord />
      <div className="w-full h-px bg-gray-200" />
      <GitHub />
      <div className="w-full h-px bg-gray-200" />
      <Hedera />
      <div className="w-full h-px bg-gray-200" />
      <JiraSoftware />
      <div className="w-full h-px bg-gray-200" />
      <Solana />
      <div className="w-full h-px bg-gray-200" />
      <Trello />
      <div className="w-full h-px bg-gray-200" />
      <Vercel />
    </StatusTemplate>
  );
};
export default HomePage;
