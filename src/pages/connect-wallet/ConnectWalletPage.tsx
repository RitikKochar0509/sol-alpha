import React from 'react'
import { useHistory } from 'react-router'
import staking from '../../images/staking.png';
function ConnectWalletPage() {
  const history = useHistory()
  return (
    <>
      <div>ConnectWalletPage</div>
      <br />
      <button
        onClick={() => {
          history.push('/create-wallet-account')
        }}
      >
        Create Account
      </button>
      <div className="mb-auto staking-wrapper">
        <div className="p-2 sm:p-10 flex flex-col items-center">
          <div className="flex justify-center m-14">
            <div className="justify-center w-full flex flex-col">
              <div className="flex flex-col sm:flex-row justify-center flex-wrap">
                <div className="w-60 h-80 rounded-lg m-5 bg-sections-bslgray relative text-center mb-10">
                  <img
                    className="w-20 mx-auto -mt-8"
                    src={staking} 
                  />
                  <div className="text-4xl bsl-green-gradient mt-20">You need a stacking</div>
                  <div className="text-xl mt-28 text-white">
                account to go started
                  </div>
                    <button  onClick={() => {
          history.push('/create-wallet-account')
        }}
                    className="w-32 ml-2 mt-2 sm:mt-5 text-base px-5 py-2 font-medium tracking-wide shadow-lg text-white capitalize hover:opacity-75 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out tab-btn"
                >
                    Create Account
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConnectWalletPage
