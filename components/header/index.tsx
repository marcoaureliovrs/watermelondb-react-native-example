import React from 'react';
import { AddButton, AddButtonLabel, HeaderContainer, HeaderTitle } from './styles'; // Importando estilos do arquivo HeaderStyles.js

export const Header = ({ onAddPress }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>Livraria Tech</HeaderTitle>
      <AddButton onPress={onAddPress}>
        <AddButtonLabel>+</AddButtonLabel>
      </AddButton>
    </HeaderContainer>
  );
};
