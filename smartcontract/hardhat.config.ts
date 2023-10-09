import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
const config: HardhatUserConfig = {
  solidity: "0.8.21",
  networks: {
    mumbai: {
      url: process.env.MUMBAI_URL,
      accounts: [process.env.ACCOUNT_PV as string],
      chainId: 80001,
    },
  },
};

export default config;
