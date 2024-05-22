import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";

function App() {
  return (
    <div>
      <p>Подключи кошелек, чтобы проверить proof of humanity!!</p>
      <TonConnectButton />
    </div>
  );
}

export default App;
