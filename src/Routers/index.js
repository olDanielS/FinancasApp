import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import StackRouters from './StackRouters';
import DrawerRouters from './DrawerRouters';


import {AuthContext} from '../pages/Context/auth';

function Routes() {
  const {signed, loading} = useContext(AuthContext);

  if(loading){
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator size={'large'} color='#131313'/>
          </View>
  }
 return (
   signed ? <DrawerRouters/> : <StackRouters/>
  );
}
export default Routes;