import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import gumballCard from "../components/ui/gumball_card";
import { useAccount, useWriteContract } from "wagmi";
import GumballCard from '../components/ui/gumball_card';

const Home: NextPage = () => {
  const { address, isConnected } = useAccount();

  return (
    <div>
      <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 12,
      }}
    >
      <ConnectButton />
    </div>
    {isConnected ? (
      <div className="flex justify-center items-center h-screen"> 
            <GumballCard />
            </div>
      ) : (
        <div>
          Gumball Machine
        </div>
      )}
    </div>
  );
};

export default Home;
