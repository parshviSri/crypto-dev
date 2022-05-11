import { ethers } from 'ethers'
import Link from 'next/link'
import '../styles/globals.css'
import {useState,useEffect} from 'react';
function MyApp({ Component, pageProps }) {
  const[con , setCon] = useState(false);
  const [user, setUser] = useState('')
  useEffect(()=>{
    connectWallet();
  },[])
  const connectWallet = async() =>{
    if(window.ethereum){
      setCon(true)
      const account = await window.ethereum.request({method:'eth_accounts'});
      if(account.length==0){
        const connectAccount = await window.ethereum.request({method:'eth_requestAccounts'})
      }
      setUser(account.toString().substr(0,8));
    }
  
  }
  return( <div>
    
    <nav className="border p-6">
    <div className='flex justify-end'>
    {con || <button onClick={connectWallet} className=" bg-blue-700 hover:bg-blue-800 rounded px-2 py-2 text-white  ">Connect Wallet</button>}
    {con && <p>Welcome :{user}....</p>}

</div>
      <Link href="/" >
      <a className='text-blue-800 p-2'>Home</a>
      </Link>
      <Link href="/dao">
      <a className='text-blue-800 p-2'>Dao</a>
      </Link>
      <Link href="/defi">
      <a className='text-blue-800 p-2'>DeFi</a>
      </Link>
      <Link href="/nft">
      <a className='text-blue-800 p-2'>NFT</a>
      </Link>

     

    </nav>
    {con || <p className='text-2xl font-bold text-blue-800 text-center my-6'>Do not have Meta Mask install from  <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" className='text-pink-500'>here</a></p>}
    {con && <Component {...pageProps} />}
  </div>)
}

export default MyApp
