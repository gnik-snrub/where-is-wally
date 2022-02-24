import Button from "../Button"
import StyledStart from "./StyledStart"


const Start = (props) => {
    const {start} = props

    const startGame = () => {
        start()
    }

    return (
        <StyledStart>
            <p>
                Click the hidden Pokemon as fast as you can to get a high score!
            </p>
            <Button onClick={startGame}>Start Game</Button>
            <p>
                If you can't recognize the silhouette, hover over with your mouse, or tap it for a preview.
            </p>
        </StyledStart>
    )
}

export default Start