import { useAccount } from "wagmi";
import { WalletConnect, Mint } from "../components";

export const ERC721 = () => {
  const { isConnected } = useAccount();
  return (
    <div>
      <WalletConnect />
      {isConnected ? <Mint /> : null}
    </div>
  );
};
