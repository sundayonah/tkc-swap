import { useState } from "react";
import { ethers } from "ethers";
import tkcSwapAbi from "./tkcSwap.json"


function App() {
      // Define your contract ABI and address
    const approveABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]

  // const { address, chainId, isConnected } = useWeb3ModalAccount()
  

    const [isLoading, setIsLoading] = useState(false)
    const [amount, setAmount] = useState('');
    const [isApproved, setIsApproved] = useState(false); 

  
  const TKCADDRESS = "0x06Dc293c250e2fB2416A4276d291803fc74fb9B5"

//   function bridge(uint256 _amount) external {}

  const APPROVE_ADDRESS =  "0x855d71a1CC8658dDD282083df9A4cbd8bE3e61FC"
  

  //approve f(x)

  async function ApproveAddress() {
   if (!window.ethereum) {
      throw new Error('MetaMask is not installed!');
    }
    setIsLoading(true)

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

    const amountInWei = ethers.utils.parseEther("100000000");

    const approveContract = new ethers.Contract(TKCADDRESS, approveABI, signer);

    try {
        const tx = await approveContract.approve(APPROVE_ADDRESS, amountInWei, {
           gasLimit: 600000,
           gasPrice: ethers.utils.parseUnits('10.0', 'gwei'),
        });

        await tx.wait();
        setIsLoading(false)
        setIsApproved(true); 
    } catch (error) {
        console.error('Error approving:', error);
    }
  }

  
  
  //    /////   bridge F(x) ///////////
    const Bridge = async () => {

       if (!window.ethereum) {
      throw new Error('MetaMask is not installed!');
    }
      
    setIsLoading(true)
      

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
    const amountInWei = ethers.utils.parseEther(amount.toString());

    
    try {
      const contract = new ethers.Contract(APPROVE_ADDRESS, tkcSwapAbi, signer);
      const tx = await contract.bridge(amountInWei, {
           gasLimit: 600000,
           gasPrice: ethers.utils.parseUnits('10.0', 'gwei'),
        });
       await tx.wait();
    setIsLoading(false)

      
    } catch (error) {
    setIsLoading(false)


      console.log("error")
    }
    
  };

  return (
    <>
 
      <div className="container w-full sm:w-[60%] md:w-[60%] lg:w-[30%] m-auto mt-64 px-4 ">
        <div className="flex justify-center mb-10 ">

      <w3m-button />
        </div>
      <div className="flex items-center justify-center space-y-4 p-3 rounded-md shadow-2xl bg-[#0d1117]">
          
          {/* <form onSubmit={handleSubmit} className=" space-y-4 p-3 rounded-md shadow-x1"> */}
        <form  className=" space-y-4 p-3 rounded-md shadow-x1 ">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter Amount"
          className="w-full shadow-md p-2 rounded text-white bg-slate-900 focus:outline-none focus:ring-0"
            />
            {isApproved ?

              <button
                onClick={ApproveAddress}
                disabled={isLoading}
                className={`w-full ${isLoading ? "bg-gray-400 cursor-not-allowed py-2 px-4" : "bg-[#1c3666] hover:bg-[#313d79] text-white font-bold py-2 px-4 rounded"}`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                  </div>
                ) : isApproved ? (
                  "Bridge" // Change button text to "Bridge" after approval
                ) : (
                  "Approve"
                )}
              </button>
              :
              <button
                onClick={Bridge}
                disabled={isLoading}
                className={`w-full ${isLoading ? "bg-gray-400 cursor-not-allowed py-2 px-4" : "bg-[#1c3666] hover:bg-[#313d79] text-white font-bold py-2 px-4 rounded"}`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                  </div>
                ) : isApproved ? (
                  "Bridge" // Change button text to "Bridge" after approval
                ) : (
                  "Bridge"
                )}
              </button>
            }
      </form>
        </div>
        </div>
    </>
  )
}

export default App
