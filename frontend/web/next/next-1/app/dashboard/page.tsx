import Image from "next/image";

import avatar_1 from "../../assets/images/avatar_1.jpg";

import nft_1 from "../../assets/images/nft_1.jpg";
import nft_2 from "../../assets/images/nft_2.jpg";

import sprites from "../../assets/icons/sprites.svg";

export default function Dashboard() {
  return (
    <div className="flex flex-col">
      <div className="flex space-x-8 px-8">
        <div className="flex p-4 items-center bg-white rounded-2xl">
          <div className="p-8 mr-5 bg-slate-500 rounded-2xl">
            <svg className="w-8 h-8 fill-white">
              <use href={`${sprites}#assets`} />
            </svg>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl">Total Assets</h1>
            <p className="text-3xl font-medium mt-1">$3,500</p>
          </div>
        </div>
      </div>

      <div className="mt-8 px-8">
        <h1 className="text-2xl font-bold">My Collections</h1>

        <div className="flex space-x-5 mt-6">
          <div className="flex relative cursor-pointer">
            <img
              src={nft_1}
              alt=""
              className="w-48 h-64 rounded-2xl hover:w-96 transition-all"
            />
            <div className="hidden">
              <div className="flex flex-col absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <h1 className="text-xl font-semibold">Karawai Art</h1>
                <p className="text-xs">
                  Current Price{" "}
                  <span className="text-base font-semibold">2.51 ETH</span>
                </p>
              </div>
              <div className="flex">{/* avatars */}</div>
            </div>
          </div>
          <div className="flex relative cursor-pointer">
            <img
              src={nft_2}
              alt=""
              className="w-48 h-64 rounded-2xl hover:w-96 transition-all"
            />
            <div className="hidden">
              <div className="flex flex-col absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <h1 className="text-xl font-semibold">Karawai Art</h1>
                <p className="text-xs">
                  Current Price{" "}
                  <span className="text-base font-semibold">2.51 ETH</span>
                </p>
              </div>
              <div className="flex">{/* avatars */}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex space-x-5 px-8">
        <div className="flex flex-col w-3/5">
          <h1 className="text-2xl font-bold">Recent Trading</h1>

          <table className="mt-6">
            <thead>
              <tr className="bg-slate-300">
                <th className="py-4 px-8">
                  <h1 className="font-semibold">Event</h1>
                </th>
                <th className="py-4 px-8">
                  <h1 className="font-semibold">Item</h1>
                </th>
                <th className="py-4 px-8">
                  <h1 className="font-semibold">From</h1>
                </th>
                <th className="py-4 px-8">
                  <h1 className="font-semibold">To</h1>
                </th>
                <th className="py-4 px-8">
                  <h1 className="font-semibold">Price</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-300">
                <td className="py-4 px-8">
                  <p>Sale</p>
                </td>
                <td className="py-4 px-8">
                  <div className="flex items-center">
                    <img
                      src={avatar_1}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                    <p className="ml-3">Lady Bees</p>
                  </div>
                </td>
                <td className="py-4 px-8">
                  <p>Xzumi</p>
                </td>
                <td className="py-4 px-8">
                  <p>2D342</p>
                </td>
                <td className="py-4 px-8">
                  <div className="flex items-center">
                    <svg className="w-6 h-6">
                      <use href={`${sprites}#ethereum`} />
                    </svg>
                    <p className="ml-3">2.125</p>
                  </div>
                </td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-300">
                <td className="py-4 px-8">
                  <p>Sale</p>
                </td>
                <td className="py-4 px-8">
                  <div className="flex items-center">
                    <img
                      src={avatar_1}
                      alt=""
                      className="w-8 h-8 rounded-full"
                    />
                    <p className="ml-3">Lady Bees</p>
                  </div>
                </td>
                <td className="py-4 px-8">
                  <p>Xzumi</p>
                </td>
                <td className="py-4 px-8">
                  <p>2D342</p>
                </td>
                <td className="py-4 px-8">
                  <div className="flex items-center">
                    <svg className="w-6 h-6">
                      <use href={`${sprites}#ethereum`} />
                    </svg>
                    <p className="ml-3">2.125</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-start w-2/5 gap-5">
          <div className="p-8 bg-white rounded-2xl">
            <h1 className="text-lg text-center">BTC Wallet</h1>
            <p className="text-2xl font-semibold mt-2 text-center">
              4.02857 BTC
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl">
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
