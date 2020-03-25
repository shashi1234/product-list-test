import React from "react";
import styled from 'styled-components';

const DropdownDiv = styled.div`
    text-align: center;    
    height: 75px;
`;

const Label = styled.label`
    padding: 10px;
    font-weight: bold;
`;

const Select = styled.select`
    width: 10%;
`;

const renderOptions = (options, selectedId) => {
    return options.map((option) => 
        <option key={option.id} value={option.value} selected={option.id === selectedId}>{option.name}</option>
    )
}

function Dropdown(props) {
    const { data, onChange, selectedId } = props;
    return (
        <DropdownDiv>
            <Label for="cars">Category:</Label>
            { data ? 
                <Select id="products" onChange={(e) => onChange(e.target.value)}>
                    {renderOptions(data, selectedId)}
                </Select>
            : null }
        </DropdownDiv>
    )
}

export default Dropdown;