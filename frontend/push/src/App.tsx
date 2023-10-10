import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { WalletConnect } from "./components/ConnectWallet";

const App = () => {
  const { chains, publicClient } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );

  const { connectors } = getDefaultWallets({
    appName: "ERC721 X Push",
    projectId: import.meta.env.VITE_PROJECT_ID,
    chains,
  });

  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
        <WalletConnect />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
