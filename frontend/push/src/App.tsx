import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { ERC721 } from "./page/ERC721";
import { alchemyProvider } from "wagmi/providers/alchemy";

const App = () => {
  const { chains, publicClient } = configureChains(
    [polygonMumbai],
    [
      alchemyProvider({ apiKey: import.meta.env.VITE_API_KEY }),
      publicProvider(),
    ]
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
        <ERC721 />
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;
