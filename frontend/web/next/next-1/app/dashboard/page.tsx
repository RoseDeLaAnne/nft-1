import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-8">
        <div className="flex p-4 rounded">
          {/* image here */}
          <div className="flex flex-col">
            <h1 className="text-xl">Total Assets</h1>
            <p className="text-3xl">$3,500</p>
          </div>
        </div>
        <div className="flex p-4 rounded">
          {/* image here */}
          <div className="flex flex-col">
            <h1 className="text-xl">Total Assets</h1>
            <p className="text-3xl">$3,500</p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-2xl font-bold">My Collections</h1>

        <div className="flex space-x-5 mt-6">
          <div className="flex">
            {/* image here */}
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold">Karawai Art</h1>
              <p className="text-xs">
                Current Price{" "}
                <span className="text-base font-semibold">2.51 ETH</span>
              </p>
            </div>
            <div className="flex">{/* images */}</div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex">
        <div className="flex flex-col w-3/5">
          <h1 className="text-2xl font-bold">Recent Trading</h1>

          <table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Item</th>
                <th>From</th>
                <th>To</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sale</td>
                <td>Lady Bees</td>
                <td>Xzumi</td>
                <td>2D342</td>
                <td>2.125</td>
              </tr>
              <tr>
                <td>Transfer</td>
                <td>Lady Bees</td>
                <td>BabyHunt</td>
                <td>Splace21</td>
                <td>0.324</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex w-2/5 gap-5">
          <div className="p-8">
            <h1 className="text-lg text-center">BTC Wallet</h1>
            <p className="text-2xl font-semibold mt-2 text-center">
              4.02857 BTC
            </p>
          </div>
          <div className="p-8">
            <h1 className="text-lg text-center">Ethereum Wallet</h1>
            <p className="text-2xl font-semibold mt-2 text-center">
              2.0293 ETH
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
