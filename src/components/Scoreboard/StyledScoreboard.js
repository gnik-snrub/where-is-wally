import styled from "styled-components";


const StyledScoreboard = styled.section`
    display: grid;
    grid-template-rows: 100px 40px auto;
    & > :first-child {
        align-self: center;
        justify-self: center;
        margin: 25px 0;
        width: fit-content;
    }
    & > :nth-child(2) {
        align-self: center;
    }
`

export const ScoreboardFormInput = styled.input`
    background-color: inherit;
    border: 0;
    border-bottom: 3px solid #2D3142;
    font: inherit;
    text-align: center;
    &:focus {
        outline: none;
    }
`

export const ScoreContainer = styled.ul`
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 80%;
    list-style: none;
    padding: 0;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 50px;
`

export const ScoreboardField = styled.span`
    border-bottom: 2px solid black;
    width: 75%;
    margin-bottom: 15px;
    @media (max-width: 1125px) {
        width: 100%;
        border-bottom: 2px solid transparent;
    }
`

export const Score = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    width: 100%;
    @media (max-width: 720px) {
        grid-template-columns: 1fr 1fr;
        & :first-child {
            display: none;
        }
    }
`

export default StyledScoreboard