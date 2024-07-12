// /src/app/TransferCrypto/page.jsx

"use client";
import HeaderLogo from "../../components/HeaderLogo";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/Footer";
import axios from "axios";
const TransferCrypto = () => {
  const router = useRouter();

  const [address, setAddress] = useState();
  const [amount, setAmount] = useState();
  const [blockchain, setBlockchain] = useState();

  const createWink =async () => {
console.log("Address", address);
console.log("amount", amount);
console.log("chain", blockchain);

try {
  const res = await axios.post("http://localhost:3001/create-link",{
    walletAddress:address, amount:amount, chainDetails:blockchain, type:"1"
  })

  console.log(res)
  if(res.status === 200){
    console.log(res.data);
  }
} catch (error) {
  console.log("error in creating link");
}
  }

  return (
    <div className="bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen">
      <HeaderLogo />
      <div className="items-center mx-auto pt-[16px]">
        <div className="text-center">
          <p className=" text-[24px] md:text-[30px] font-bold">Transfer</p>
          <p className="pt-[8px] text-customFontColor">
            Send cryptocurrency securely to any wallet address. Choose the
            blockchain, specify the amount, and transfer instantly.
          </p>
        </div>
        <div className="w-[350px] md:w-[455px] mx-auto pt-[34px] space-y-4 text-[16px]">
          <div className="">
            <label
              className="block text-sm font-medium"
              htmlFor="walletaddress"
            >
              Recipient&apos;s Wallet Address
            </label>
            <input
              type="text"
              id="walletaddress"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              placeholder="john@gmail.com"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium" htmlFor="community">
              Select Blockchain
            </label>
            <select
              id="community"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              value={blockchain}
              onChange={(e) => setBlockchain(e.target.value)}
              defaultValue=" Ethereum"
              required
            >
              <option value="" disabled>
                Select Blockchain
              </option>
              <option value="Base">Base</option>
              <option value="Ethereum">Ethereum</option>
              <option value="Polygon">Polygon</option>
              <option value="Degen">Degen</option>
            </select>
          </div>
          <div className="">
            <label className="block text-sm font-medium" htmlFor="amount">
              Amount to Send
            </label>
            <input
              type="text"
              id="amount"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              placeholder="00"
              value={amount}
              required
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className=" py-3">
            <button
              className="w-[350px] md:w-[455px] h-[48px] bg-customBorder border-2 border-customButtonStroke font-bold hover:bg-blue-900 rounded-[32px] flex justify-center items-center"
              onClick={() => createWink()}
            >
              Create Wink
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TransferCrypto;
