import React from 'react';
import styled from 'styled-components';

const ProductCardDiv = styled.div`
    width: 200px;
    height: 300px;
    border: solid 1px;
    display: inline-block;
    margin: 10px;
    cursor: pointer;
`;

const Image = styled.img`
    display: inline-block;
    height: 50%;
    padding: 23px;
`;

const ProductNameDiv = styled.div`
    text-align: center;
    margin-top: 26px;
`;

function ProductCard(props) {
    const { data } = props;
    const handleOnClick = (e) => {        
        props.onClick(data);
    }
    return (
        <ProductCardDiv onClick={(e) => handleOnClick(e)}>
            <Image src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"></Image>
            <ProductNameDiv>{data.name}</ProductNameDiv>
        </ProductCardDiv>
    )
}

export default ProductCard;