import styled from 'styled-components/native';
import { Button, Text, TextInput, TouchableHighlight, View, Dimensions } from 'react-native';

const windowDim = Dimensions.get('window');
const primaryColor = '#FB8C00';
const windowHeight = windowDim.height;


export const StyledContainer = styled(View)`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const StyledModalView = styled(View)`
  background-color: #FFFFFF;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 10px;
  height: ${windowHeight / 2}px;
  elevation: 4;
`;

export const TopActionsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CloseButton = styled(TouchableHighlight)`
  padding: 10px;
`;

export const CloseButtonText = styled(Text)`
  color: #494949;
  font-weight: bold;
  font-size: 25px;
`;

export const StyledTextInput = styled(TextInput)`
  height: 50px;
  border-width: 1px;
  border-radius: 3px;
  margin-bottom: 10px;
  padding-vertical: 10px;
  padding-horizontal: 15px;
  border-color: #c9c9c9;
`;

export const SaveButton = styled(Button)`
  color: ${primaryColor};
`;
