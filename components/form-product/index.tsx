import React, { FC, useState } from 'react';
import {
  StyledContainer,
  StyledModalView,
  TopActionsContainer,
  CloseButton,
  CloseButtonText,
  StyledTextInput,
  SaveButton,
} from './styles';
import {Modal, Text} from 'react-native';
import { saveProduct } from '../../database/helper';

export const FormProduct: FC<{
  isVisible: boolean;
  onHide: () => void;
}> = ({ onHide, isVisible }) => {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const handleSavePress = async () => {
    setIsSaving(true);
    await saveProduct({ name, price, note });
    onHide();
    setName('');
    setPrice('');
    setNote('');
    setIsSaving(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <StyledContainer>
        <StyledModalView>
          <TopActionsContainer>
            <Text>Cadastre o seu livro</Text>
            <CloseButton onPress={onHide}>
              <CloseButtonText>×</CloseButtonText>
            </CloseButton>
          </TopActionsContainer>
          <StyledTextInput
            placeholder="Nome"
            onChangeText={(text) => setName(text)}
            value={name}
          />
          <StyledTextInput
            placeholder="Preço"
            keyboardType="decimal-pad"
            onChangeText={(text) => setPrice(text)}
            value={price}
          />
          <StyledTextInput
            placeholder="Descrição"
            onChangeText={(text) => setNote(text)}
            value={note}
          />
          <SaveButton title="Salvar" disabled={isSaving} onPress={handleSavePress} />
        </StyledModalView>
      </StyledContainer>
    </Modal>
  );
};
