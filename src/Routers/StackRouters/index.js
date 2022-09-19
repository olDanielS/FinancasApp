import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import { Background } from '../../pages/SignIn/styles';

const Stack = createNativeStackNavigator();
function StackRouters() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='SignIn' component={SignIn} options={{
                headerShown: false
            }}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{
                headerTitle: 'Voltar',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: '#131313',
                    borderColor: "#00ba4a"
                }
            }}
            />
        </Stack.Navigator>
    );
    }
export default StackRouters;