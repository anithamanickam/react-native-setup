import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import {
  addToCart,
  fetchProducts,
  removeFromCart,
} from '../slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const FirstScreen = () => {
  const { products, isLoading } = useSelector(state => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  console.log(products, isLoading);

  if (isLoading) {
    return (
      <Text
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
        Loading.......
      </Text>
    );
  }

  const renderProducts = () => {
    return (
      <View>
        <Text style={{ color: 'black' }}>Render products</Text>
      </View>
    );
  };

  return (
    <View
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      }}>
      {products && products.length ? renderProducts() : null}
    </View>
  );
};

export default FirstScreen;
