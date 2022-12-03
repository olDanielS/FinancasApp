import React from 'react';
import {Container, IconView, Name, Balance, Tipo} from './styles'
import Feather from '@expo/vector-icons/Feather';


export default function Moviments({data}) {
 return (
   <Container>
    <Tipo>
      <IconView tipo={data.tipo}>
          <Feather
          name={data.tipo == 'receita' ? 'arrow-up' : 'arrow-down' }
          
          color='#FFF' size={20}/>
          <Name>{data.tipo}</Name>
      </IconView>
    </Tipo>
        <Balance>R$ {data.valor}</Balance>
   </Container>
  );
}
