import { useState } from 'react'
import { v4 } from 'uuid'
import Filter from 'bad-words'

import Button from '../Button'
import StyledScoreboard, { Score, ScoreboardField, ScoreboardFormInput, ScoreContainer } from './StyledScoreboard'

const Scoreboard = (props) => {
    const {data, playerScore, addPlayerScore, reset} = props

    const [name, setName] = useState('')
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [wordFilter,] = useState(new Filter())

    const collectScores = () => {
        data.sort((a, b) => a.time - b.time)
        let counter = 1
        const scores = data.map((score) => {
            return (
                <Score key={v4()}>
                    <span>{counter++}</span>
                    <span>{score.name}</span>
                    <span>{(Math.round(score.time * 100) / 100).toFixed(2)}</span>
                </Score>
            )
        })
        return <ScoreContainer>
            <Score>
                <ScoreboardField>Ranking</ScoreboardField>
                <ScoreboardField>Name</ScoreboardField>
                <ScoreboardField>Time (seconds)</ScoreboardField>
            </Score>
            {scores}
        </ScoreContainer>
    }

    const submitScore = (e) => {
        if (wordsAreRude()) {
            setName('No rude words please!')
        } else {
            addPlayerScore(name)
            setHasSubmitted(true)
        }
        e.preventDefault()
    }

    const wordsAreRude = () => {
        return wordFilter.isProfane(name)
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const resetGame = () => {
        reset()
    }

    const getForm = () => {
        return (
            <form onSubmit={submitScore}>
                <h2>Submit your score!</h2>
                <label>
                    Name: 
                    <ScoreboardFormInput type='text' value={name} onChange={handleChange} />
                </label>
                <Button type='submit' value='Submit' >Submit!</Button>
            </form>
        )
    }

    return (
        <StyledScoreboard>
            {hasSubmitted ? <Button onClick={resetGame} >Reset Game</Button> : getForm()}
            <span>Your score: {playerScore}</span>
            {collectScores()}
        </StyledScoreboard>
    )
}

export default Scoreboard