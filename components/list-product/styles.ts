import styled from 'styled-components/native';

// Estilização do Card
export const CardContainer = styled.View`
  background-color: #fff;
  border-radius: 8px;
  margin: 8px;
  padding: 16px;
  elevation: 3; /* Adiciona sombra no Android */
  shadow-color: #000; /* Adiciona sombra no iOS */
  shadow-offset: 0 2px; /* Adiciona sombra no iOS */
  shadow-opacity: 0.23; /* Adiciona sombra no iOS */
  shadow-radius: 2.62px; /* Adiciona sombra no iOS */
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: #666;
`;