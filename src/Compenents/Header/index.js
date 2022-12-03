import React from 'react';
import {Container, BtnMenu} from './styles'
import Feather from '@expo/vector-icons/Feather';
import { DrawerActions, useNavigation } from '@react-navigation/native';


export default function Header() {
    const navigation = useNavigation();
 return (
   <Container>
        <BtnMenu onPress={() => navigation.toggleDrawer()}>
            <Feather name='menu' size={32} color='#FFF'/> 
        </BtnMenu>
   </Container>
  );
}