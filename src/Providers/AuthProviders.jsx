import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { auth } from '../Pages/Firebase/Firebase_init';
import useAxiosPublic, { axiosPublic } from './../hooks/useAxiosPublic';
export const AuthContext = createContext(null)
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false)

            if(currentUser){
                const userInfo ={
                    email:currentUser.email
                }

                // axiosPublic.post('/jwt', userInfo)
                // .then(res=>{
                //     if(res.data.token){
                //         localStorage.setItem('token', res.data.token)
                //         console.log(res.data);
                //     }

                   
                // })
            }

            
            else{
                localStorage.removeItem('token')
            }
        })

        return ()=>{
            unsubscribe();
        }
    },[])


    const provider = new GoogleAuthProvider();

    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider)
        
    }

    const Register =(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logout = ()=>{
        setLoading(true);
        return signOut(auth) 
    }


    const updateUserProfile = (name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:photo
        })
    }

    const AuthInfo={
        user,
        loading,
        login,
        Register,
        logout,
        updateUserProfile,
        signInWithGoogle 
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;