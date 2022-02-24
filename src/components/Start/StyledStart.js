import styled from "styled-components";


const StyledStart = styled.main`
    margin-top: -80px;
    height: 100vh;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr auto 1fr;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto 1fr;
    }

    & button {
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
    }

    & p {
        max-width: 45%;
        min-width: 200px;
        height: fit-content;
        display: grid;
        place-items: center;
        padding: 15px;
    }
`

export default StyledStart