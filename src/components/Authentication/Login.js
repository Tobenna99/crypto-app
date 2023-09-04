import { Box, Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { CryptoState } from '../../CryptoContext'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../config/firebase'

function Login({handleClose}) {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const {setAlert} = CryptoState()

    const handleSubmit =async()=>{
        if(!email || !password){
          setAlert({
            open :true,
            message:"All Fields Are Required",
            type:"error"
          })
            return
        }

        try {
          const result = await signInWithEmailAndPassword(auth, email, password);
    
          const user = result.user; // Assuming the user information is available in the 'user' property
          const userEmail = user.email; // Extract the email from the user object
      

          setAlert({
            open:true,
            message:`Welcome ${userEmail}`,
            type:"success"
          })

          handleClose()
        } catch (error) {

          setAlert({
            open:true,
            message:error.message,
            type:"error"
        })
          
        }
    }

  return (
    <Box
    p={3}
    style={{display : "flex", flexDirection:"column",gap : "20px"}}
    >
 
     <TextField
     variant='outlined'
     type='email'
     label="Enter-Email"
     value={email}
     onChange={(e)=>setEmail(e.target.value)}
     fullWidth
     />
 
 <TextField
     variant='outlined'
     type='password'
     label="Enter-Password"
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     fullWidth
     />
 
 
 
 
     <Button
     variant='contained'
     size='large'
     style={{backgroundColor: "EEBC1D"}}
     onClick={handleSubmit}
     >
         Sign Up
     </Button>
     
 
 
    </Box>
  )
}

export default Login