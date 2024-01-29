import React, {FC} from 'react';
import { View, FlatList } from 'react-native';
import withObservables from '@nozbe/with-observables';

import {observeProducts, Product} from '../../database/helper'
import {CardContainer, Title, Subtitle, Description} from './styles'

const ListComponent: FC<{products: Product[]}> = ({products}) => {

  if(products.length < 1) {
    return null
  }

const renderItem = ({ item }: { item: Product }) => (
  <CardContainer>
    <Title>{item.name}</Title>
    <Subtitle>{item.price}</Subtitle>
    <Description>{item.note}</Description>
  </CardContainer>
  );

  return (
    <View style={{flex: 1}}>
     <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.createdAt?.toString() ?? ''}
      />
    </View>
  );
};

const enhanceWithWeights = withObservables([], () => ({
  products: observeProducts(),
}));

export const ListProducts = enhanceWithWeights(ListComponent);