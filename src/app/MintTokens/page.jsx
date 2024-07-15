"use client";
import HeaderLogo from "../../components/HeaderLogo";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { setUserData } from "../UserSlice";
import { useSelector, useDispatch } from "react-redux";

const MintToken = () => {
  const router = useRouter();
  const userr = useSelector((state) => state.userdata);
  const dispatch = useDispatch();
  const [address, setAddress] = useState();
  const [abi, setAbi] = useState();
  const [functionName, setFunctionName] = useState();
  const [blockchain, setBlockchain] = useState();

  const createWink =async () => {
    console.log("Address", address);
    console.log("amount", abi);
    console.log("chain", blockchain);
    console.log("name",functionName);
    
    try {
      const res = await axios.post("http://localhost:3001/create-link",{
        contractAddress:address,
        functionName:functionName,
        chainDetails:blockchain,
        abi:abi,
        type:"2"
      })
    
      console.log(res)
      if(res.status === 200){
        console.log(res.data);
        dispatch(setUserData({ address: "SDgwegwefgwe", link: res.data.link, type: "2" }));

        router.push("/SuccessLink")
      }
    } catch (error) {
      console.log("error in creating link", error);
    }
      }

  return (
    <div className="bg-gradient-to-t from-customStart via-customStart to-blue-950 min-h-screen">
      <HeaderLogo />
      <div className="items-center mx-auto pt-[16px]">
        <div className="text-center">
          <p className=" text-[24px] md:text-[30px] font-bold">Mint Tokens</p>
          <p className="pt-[8px] text-customFontColor">
            Create your own tokens by specifying a contract address and ABI
            details. <br className=" hidden md:flex lg:hidden" /> Select your preferred blockchain to mint tokens.
          </p>
        </div>
        <div className="w-[350px] md:w-[455px] mx-auto pt-[34px] space-y-4 text-[16px]">
          <div className="">
            <label
              className="block text-sm font-medium"
              htmlFor="contractaddress"
            >
              Contract Address
            </label>
            <input
              type="text"
              id="walletaddress"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              placeholder="0x123abc456def789ghi012jkl345mno678pqr901s"
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium" htmlFor="message">
              ABI
            </label>
            <textarea
              id="amount"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[120px] p-2 text-white"
              value={abi}
              required
              onChange={(e) => setAbi(e.target.value)}
            />
          </div>
          <div className="">
            <label className="block text-sm font-medium" htmlFor="functionname">
              Function Name
            </label>
            <input
              type="text"
              id="amount"
              className="bg-gray-800 border border-gray-700 rounded w-full h-[44px] p-2 text-white"
              placeholder="00"
              value={functionName}
              required
              onChange={(e) => setFunctionName(e.target.value)}
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
              required
              defaultValue=" Ethereum"
            >
              <option value="" disabled>
                Select Blockchain
              </option>
              <option value="Ethereum">Ethereum</option>
              <option value="Base">Base</option>
              <option value="Polygon">Polygon</option>
              <option value="Degen">Degen</option>
              <option value="Base Sepolia">Base Sepolia</option>
            </select>
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
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 ml-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className=" text-center p-2 md:p-5 opacity-70">
        <p className="text-customFontColor">© Ultimate Digits 2024</p>
      </div>
    </div>
  );
};

export default MintToken;
