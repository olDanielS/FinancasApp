import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../pages/Home';
import Regist from '../../pages/Register';
import Profile from '../../pages/Profile';
import Logout from '../../pages/logout';

const Drawer = createDrawerNavigator();
function DrawerRouters() {
    return (
        <Drawer.Navigator 
            screenOptions={{
                drawerStyle:{
                    backgroundColor: '#171717'
                },
                drawerLabelStyle:{
                    fontWeight: 'bold',
                },
                drawerActiveTintColor: '#FFF',
                drawerActiveBackgroundColor: '#00b94a',
                drawerInactiveBackgroundColor: '#000',
                drawerInactiveTintColor: '#DDD'
            }}
        >
            <Drawer.Screen name='Home' component={Home} options={{
                 headerShown: false,
              title: 'Home'
            }}/>
            <Drawer.Screen name='Regist' component={Regist} options={{
                 headerShown: false,
                title: 'Registrar'
            }}/>
            <Drawer.Screen name='Profile' component={Profile} options={{
              headerShown: false,
             
              headerStyle: {
                backgroundColor: '#171717'
              }
              
              
            }}/>
            <Drawer.Screen name='Logout' component={Logout} options={{
              headerShown: false,
              title: 'Sair',
              headerStyle: {
                backgroundColor: '#171717'
              }
              
              
            }}/>
        </Drawer.Navigator>
    );
    }

export default DrawerRouters;