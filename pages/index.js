import { ethers } from 'ethers';
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css';
import WhiteList from '../utils/WhiteList.json';

export default function Home() {
  const[user,setUser] = useState('');
  const[errMess,seterrMess] = useState('');
  
  const joinWaitlist = async() =>{
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer  = provider.getSigner();
    const contract = new ethers.Contract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, WhiteList.abi,signer);
    try{
      let transaction = await contract.checkWhitListed();
    let currentUser= await contract.numberOfUser();
    console.log(currentUser.toNumber());
    setUser(currentUser.toNumber());
    }
  catch(err){
    console.log(err);
    seterrMess(err.error.message)
    
  }
    
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Devs</title>
        <meta name="description" content="dapp for Crypto Dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='m-16'>

        <h1 className='text-2xl p-4 text-center'>
          Welcome to Crypto Devs!!
        </h1>
        <p className='text-center p-2 text-xl'>It is a NFT collection for devloper in Crypto</p>
        {user>0 && <p className='text-center text-xl p-2'>{user} has already joined.</p>}
        <div className='flex justify-center m-4'>
        <button className='bg-blue-700 hover:bg-blue-900 rounded font-bold px-2 py-4  text-white w-64' onClick={joinWaitlist}>Join the whitelist</button>
        </div>
        <p className='text-center'>{errMess}</p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
