import Image from "next/image";

export default function Wallets() {
  return (
    <div className="px-8">
      <h1 className="text-2xl font-bold">My Wallets</h1>

      <div className="grid grid-cols-2 gap-5 mt-6">
        <div className="p-8 bg-white rounded-2xl">
          <h1 className="text-lg text-center">BTC Wallet</h1>
          <p className="text-2xl font-semibold mt-2 text-center">4.02857 BTC</p>
        </div>
        <div className="p-8 bg-white rounded-2xl">
          <h1 className="text-lg text-center">Ethereum Wallet</h1>
          <p className="text-2xl font-semibold mt-2 text-center">2.0293 ETH</p>
        </div>
        <div className="p-8 bg-white rounded-2xl">
          <h1 className="text-lg text-center">Tether Wallet</h1>
          <p className="text-2xl font-semibold mt-2 text-center">2.0293 USDT</p>
        </div>
      </div>
    </div>
  );
}
