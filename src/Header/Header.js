import React from "react";
import styled from 'styled-components';
import Dropdown from '../component/Dropdown/Dropdown';

const Div = styled.div`    
    width: 100%;    
    border-bottom: solid 1px;
`;

const Head = styled.h1`
    text-align: center;
    margin-top: 70px;
    margin-bottom: 40px;
`;

function Header(props) {
    const { categoryNeeded, header, selectedCategory, dropDownData } = props;    

    const onChange = (e) => {
        const dataToBeSent = dropDownData && dropDownData.filter(item => item.value.toLowerCase() === e.toLowerCase());
        props.onCategoryChange(dataToBeSent[0]);
    }

    return (
        <Div>
            <Head>{header}</Head>
            {
                categoryNeeded && dropDownData ? <Dropdown selectedId={selectedCategory && selectedCategory.id} data={dropDownData} onChange={(e) => onChange(e)}></Dropdown> : null
            }
        </Div>
    )
}

export default Header;