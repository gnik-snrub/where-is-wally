import styled from "styled-components";

const Button = styled.button`
    background-color: transparent;
    border: 3px solid transparent;
    font: inherit;
    color: inherit;
    transition: 0.3s;
    
    &:focus {
        outline: none;
    }
    
    &:hover {
        border-bottom: 3px solid #2D3142;
        border-top: 3px solid #2D3142;
    }
`

export default Button