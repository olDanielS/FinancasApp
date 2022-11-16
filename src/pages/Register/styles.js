import styled from "styled-components/native";

export const Background = styled.View`
flex: 1;
background-color: #131313;
padding-top: 15px;
padding-left: 10px;
`
export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
width: 90%;
height: 45px;
background-color: rgba(255,255,255, 0.9);
border-radius: 7px;
align-items: center;
padding: 10px;
font-size: 16px;
margin-bottom: 6px;
margin-top: 40px;
`
export const SubmitButton = styled.TouchableOpacity`
width: 90%;
height: 45px;
background-color: ${props => props.tip === 'receita' ? '#00b94a' : '#c62c36' };
border-radius: 7px;
align-items: center;
padding: 10px;
margin-top: 5px;
`
export const SubmitText = styled.Text`
font-size: 20px;
`
