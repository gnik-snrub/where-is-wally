import styled from 'styled-components'

const StyledApp = styled.div`
    height: 100vh;
    overflow-x: hidden;
    @media (max-width:1000px) {
        overflow-x: scroll;
    }

    display: grid;
    grid-template-rows: max-content auto;

    background-color: skyblue;
    background: url(${process.env.PUBLIC_URL}/Landscape.png);
    background-size: cover;

    font-family: 'Press Start 2P', cursive, monospace;
    text-align: center;
    color: #2D3142;
`

export const MainArea = styled.main`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 3fr;
    @media (max-width: 1000px) {
        grid-template-columns: auto;
        grid-template-rows: fit-content auto;
    }
`

export default StyledApp