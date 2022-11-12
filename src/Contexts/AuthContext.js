import React, { useContext,useState,useEffect } from 'react';
import { auth, Auth } from '../Firebase';
import { createContext } from 'react';

export  function useAuth() {
  return (
    useContext(AuthContext)
  )
}




const AuthContext=createContext();


export  function AuthProvider({children}) {
  const [error, setError] = useState("");

  const [currentUser,setCurrentUser]=useState()
    
  function signup(email,password) {
      return auth.createUserWithEmailAndPassword(email,password)
    }
    async function login(email,password) {
      try {
        let res = await auth.signInWithEmailAndPassword(email,password)
         setCurrentUser(res)
        return {user:res,error:null}
        }catch(err){
        return {error:err.message,user:null}
      }
}
    
    
   
  useEffect(()=>{

  },[])
    
  const value={
    setCurrentUser,
      currentUser ,
      signup ,
      login ,
  }
  return (
<AuthContext.Provider value={value}> 
        {children}
 </AuthContext.Provider>
  )
}
