import styled from "styled-components";

const StyledSidebar = styled.section`
    position: sticky;
    bottom: 22%;
    align-self: end;
    display: grid;
    place-items: center;
    grid-template-rows: 100px auto 100%;

    @media (max-width: 1000px) {
        grid-template-rows: fit-content auto;
        top: 0;
        height: 100%;
        align-self: center;
        height: fit-content;
        backdrop-filter: blur(10px);
        border-bottom: 1px solid black;
        & h2 {
            display: none;
        }
    }
`

export const StyledIconList = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    padding: 0;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(6, 1fr);
    }
`

export const ScoreboardForm = styled.form`

`

export default StyledSidebar