import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #2196F3; /* Cor de fundo do cabeçalho */
  padding: 16px;
`;

export const HeaderTitle = styled.Text`
  color: white; /* Cor do texto */
  font-size: 20px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #FFC107; /* Cor de fundo do botão de adição */
  padding: 10px;
  border-radius: 20px;
`;

export const AddButtonLabel = styled.Text`
  color: white; /* Cor do texto do botão de adição */
  font-size: 18px;
  font-weight: bold;
`;
