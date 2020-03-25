import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from "../../Header/Header";

const Div = styled.div`
    width: 100%;
    height: 70%;
    margin-top: 40px;
    margin-left: 30px;
`;

const LeftDiv = styled.div`
    float: left;
    width: 50%;
    height: 100%;
`;

const RightDiv = styled.div`
    float: right;
    width: 50%;
    height: 100%;
`;

const Image = styled.img`
    margin: 25px 0px 0px 40px;
    width: 80%;
    height: auto;
`;

const DataDiv = styled.div `
    margin-top: 40px;
    font-weight: bold;
`;

function ProductDetail(props) {
    const [productData, setProductData] = useState('');
    const { productId, category } = props.match.params;

    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:3000/products?id='+productId, {
                method: "GET"
            })
            .then(res => res.json())
            .then(response => {
                setProductData(response[0]);
            })
            .catch(err => console.log(err));
        }
        fetchData();
    }, [])

    return (
        <React.Fragment>
            <Header categoryNeeded={false} header='Product Details Page'></Header>
            <Div>
                <LeftDiv>
                    <Image src={productData ? productData.url : "https://homepages.cae.wisc.edu/~ece533/images/airplane.png"}></Image>
                </LeftDiv>
                <RightDiv>
                    <DataDiv>{category || ''}</DataDiv>
                    <DataDiv>{productData ? productData.name : ''}</DataDiv>
                    <DataDiv>{productData ? productData.description : ''}</DataDiv>
                </RightDiv>
            </Div>            
        </React.Fragment>
    )
}

export default ProductDetail;