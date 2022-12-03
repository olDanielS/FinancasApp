import React from "react"; 
import styled from "styled-components/native";

export const Background = styled.View`
flex: 1;
background-color: #232630;

`;
export const Container = styled.View`
flex: 1;
align-items: center;
justify-content: center;
`;
export const ImgLogo = styled.Image`
margin-bottom: 50px;
`;
export const Input = styled.TextInput.attrs({
    placeHolderTextColor: 'rgba(255,255,255,0)'
})`
width: 90%;
height: 45px;
border-radius: 4px;
margin-bottom: 15px;
border-color: #FFF;
background-color: #FFF;
font-size: 16px;
padding: 10px;
`;
export const SubmitButton = styled.TouchableOpacity`
width: 60%;
height: 40px;
background-color: #00ba4a;
justify-content: center;
border-radius: 6px;

`;
export const SubmitText = styled.Text`
text-align: center;
font-size: 18px;
color: #000;
`;
export const Button = styled.TouchableOpacity`
margin-top: 15px;
border-bottom-width: 1px;
border-color: #fff;
`;
export const ButtonText = styled.Text`
color: #FFF;
font-size: 16px;
`;