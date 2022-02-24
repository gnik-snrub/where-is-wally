import styled, { keyframes } from "styled-components";

const StyledFoundIcon = styled.li`
    display: grid;
    place-items: center;
`

const brighten = keyframes`
    from {
        filter: contrast(0%) brightness(0%);
    } 40% {
        filter: none;
        transform: scale(120%);
    } 65% {
        transform: rotate(25deg);
    } 75% {
        transform: rotate(-25deg);
    } to {
        transform: scale(100%) rotate(0deg);
    }
`

export const IconImage = styled.img`
    filter: ${props => props.shadow ? 'contrast(0%) brightness(0%);' : 'none' };
    animation: ${props => !props.shadow ? brighten : null } 0.7s forwards;
    transition: 0.3s;
    &:hover {
        ${props => props.preview ? 'filter: none;' : null}
    }
`

export default StyledFoundIcon