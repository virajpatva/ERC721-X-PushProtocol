import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWalletClient,
} from "wagmi";
import abi from "../configs/NFT.abi.json";
import { PushAPI, SignerType } from "@pushprotocol/restapi";

export const Mint = () => {
  const { address } = useAccount();
  const { data: walletClient, isError, isLoading } = useWalletClient();
  console.log(walletClient);
  let user;
  if (walletClient) {
    PushAPI.initialize(walletClient as SignerType, {
      env: "staging" as any,
    }).then((resp: any) => {
      console.log(resp);
      user = resp;
    });
  }
  const { config: Mint } = usePrepareContractWrite({
    address: `0xac778f016723dcac6745e7b3719f1ed390d5309e`,
    abi: abi,
    functionName: "safeMint",
    args: [
      address,
      "https://img.freepik.com/premium-photo/blockchain-technology-with-abstract-background-blockchain-inscription-abstract-technology-cube-3d-render_120871-987.jpg",
    ],
  });
  const { write: mintFunction } = useContractWrite(Mint);
  return (
    <div>
      <div onClick={mintFunction}>
        <button>Mint - {address}</button>
      </div>
    </div>
  );
};
