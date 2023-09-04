import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { CoinList } from "./config/api";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState("NGN");
  const [symbol, setSymbol] = useState("₦");

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const[user, setUser] = useState(null)
  const [alert, setAlert]= useState({
    open: false,
    message:'',
    type:'success'
  })


  const [watchlist , setWatchlist] = useState([])

  useEffect(() => {
    let unsubscribe; // Declare the unsubscribe variable outside the if block
  
    if (user) {
      const coinRef = doc(db, "watchlist", user.uid);
  
      unsubscribe = onSnapshot(coinRef, coin => {
        if (coin.exists()) {
          setWatchlist(coin.data().coins);
        } else {
          console.log("No Items In Watchlist");
        }
      });
    }
  
    return () => {
      // Only call unsubscribe if it's defined
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [user]);
  

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user) setUser (user)
      else setUser(null)

      console.log(user)
    })
  })
  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    console.log(data);

    setCoins(data);
    setLoading(false);
  };

  useEffect(() => {
    if (currency === "NGN") setSymbol("₦");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrency, symbol , coins,loading, fetchCoins ,alert , setAlert , user , setUser,watchlist }}>
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
