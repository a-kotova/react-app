import React from 'react';
import { connect } from 'react-redux';
import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  NameContainer,
  QuantityContainer,
  PriceContainer,
  ArrowContainer,
  ValueContainer,
  RemoveButton,
} from './checkout-cart-item.styles';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';

const CheckoutCartItem = ({
  cartItem, addItem, clearItem, removeItem,
}) => {
  const {
    name, imageUrl, price, quantity,
  } = cartItem;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <img src={imageUrl} alt="checkout cart item" />
      </CheckoutItemImageContainer>
      <NameContainer>{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeItem(cartItem)}>&#10094;</ArrowContainer>
        <ValueContainer>{quantity}</ValueContainer>
        <ArrowContainer onClick={() => addItem(cartItem)}>&#10095;</ArrowContainer>
      </QuantityContainer>
      <PriceContainer>{price}</PriceContainer>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutCartItem);