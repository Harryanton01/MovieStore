import React from 'react';
import styled from 'styled-components';
import Cart from '../components/cart/cart';

const StyledDiv = styled.div`
    padding: 50px;
`;

const CartPage = () => (
    <StyledDiv>
        <Cart />
    </StyledDiv>
);

export default CartPage;