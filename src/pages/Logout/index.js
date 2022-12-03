import React,{useContext, useEffect} from 'react';
import { View } from 'react-native';
import { AuthContext } from '../Context/auth';

export default function Logout() {
    const {signout} = useContext(AuthContext);
    useEffect(() => {
        signout();
    },[])
    return (
        false
    );
}