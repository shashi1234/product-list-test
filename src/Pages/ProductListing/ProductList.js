import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import ProductCard from '../../component/ProductCard/ProductCard';
import Header from "../../Header/Header";
import history from '../../history';

const Div = styled.div`
    width: 100%;
    height: 70%;
    margin-top: 40px;
    margin-left: 30px;
`;

function ProductList(props) {
    const [products, setProducts] = useState([{"id": 1, "categoryId": 1, "name": "Volvo", "description": "VOLVO, is a Swedish luxury vehicles brand and a subsidiary of the Chinese automotive company Geely. It is headquartered in Torslanda in Gothenburg, Sweden."}])
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [dropDownData, setDropDownData] = useState([{value: 'volvo', name:'Volvo'}, {value: 'saab', name:'Saab'}, {value: 'mercedes', name:'Mercedes'}, {value: 'audi', name:'Audi'}])
    const localData = JSON.parse(localStorage.getItem('selectedCategory'));

    if(localData) {
        setSelectedCategory(localData);
        localStorage.removeItem('selectedCategory');
    }
    
    useEffect(() => {
        const fetchData = () => {            
            fetch('http://localhost:3000/categories', {
                method: "GET"
            })
            .then(res => res.json())
            .then(response => {
                if(!selectedCategory) {
                    setSelectedCategory(response[0]);
                    fetchProductList(response[0].id);
                }else {
                    fetchProductList(selectedCategory.id);
                }
                setDropDownData(response);
            })
            .then(err => console.log(err));
        }        
        fetchData();
    }, [])


    const fetchProductList = (categoryId) => {
        fetch('http://localhost:3000/products?categoryId='+categoryId, {
            method: "GET"
        })
        .then(res => res.json())
        .then(response => {
            setProducts(response);
        })
        .catch(err => console.log(err));
    }

    const handleOnChange = (data) => {
        setSelectedCategory(data);
        fetchProductList(data.id);
    }
    
    const onClick = (data) => {
        localStorage.setItem('selectedCategory', JSON.stringify(selectedCategory));
        history.push(`/Details/${data.id}/${selectedCategory.name}`);
    }

    return (
        <React.Fragment>
            <Header categoryNeeded={true} header='Product Listing Page' selectedCategory={selectedCategory || null} dropDownData={dropDownData} onCategoryChange={(e) => handleOnChange(e)}></Header>
            <Div>
                {
                    products && products.map(prod => {
                        return (
                            <ProductCard key={prod.id} data={prod} onClick={onClick}></ProductCard>
                        )
                    })
                }
            </Div>            
        </React.Fragment>
    )
}

export default ProductList;