import styled from "styled-components";


const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    backdrop-filter: blur(10px);
    width: 100%;
    @media (max-width: 1000px) {
        position: relative;
    }
`

export default StyledHeader