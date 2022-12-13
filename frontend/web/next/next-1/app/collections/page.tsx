import Image from "next/image";

import avatar_1 from "../../assets/images/avatar_1.jpg";

import nft_1 from "../../assets/images/nft_1.jpg";
import nft_2 from "../../assets/images/nft_2.jpg";

export default function Collections() {
  return (
    <div className="px-8">
      <h1 className="text-2xl font-bold">Marketplace</h1>

      <div className="grid grid-cols-2 gap-8 mt-6">
        <div className="w-full">
          <img src={nft_1} alt="" className="w-full h-96 rounded-2xl" />
          <div className="flex justify-between px-4 mt-4 items-center">
            <h1 className="text-2xl font-semibold">Karawai Art</h1>

            <div className="flex">
              <img src={avatar_1} alt="" className="w-14 h-14 rounded-full" />
              <img src={avatar_1} alt="" className="w-14 h-14 rounded-full" />
              <img src={avatar_1} alt="" className="w-14 h-14 rounded-full" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <img src={nft_2} alt="" className="w-full h-96 rounded-2xl" />
          <div className="flex justify-between px-4 mt-4 items-center">
            <h1 className="text-2xl font-semibold">Karawai Art</h1>

            <div className="flex">
              <img src={avatar_1} alt="" className="w-14 h-14 rounded-full" />
              <img src={avatar_1} alt="" className="w-14 h-14 rounded-full" />
              <img src={avatar_1} alt="" className="w-14 h-14 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
