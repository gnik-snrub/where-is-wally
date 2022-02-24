import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0%;
    } to {
        opacity: 100%;
    }
`

const fadeOut = keyframes`
    from {
        opacity: 100%;
    } to {
        opacity: 0%;
    }
`

const StyledDropdown = styled.aside`
    position: absolute;
    left: ${props => props.left}px;
    top: ${props => props.top}px;
    overflow-x: scroll;

    border: 1px solid black;
    padding: 10px;

    font-size: 15px;
    color: #DDE0E4;

    width: fit-content;
    backdrop-filter: blur(10px) brightness(80%);
    animation: ${props => props.out ? fadeOut : fadeIn} 0.2s ease-in-out;

    & ul {
        padding: 0;
    }
    
    @media (max-width: 1000px) {
        & ul {
            grid-template-columns: repeat(2, 1fr);
        }
    }
`

export default StyledDropdown