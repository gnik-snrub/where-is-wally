import { useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, collection, onSnapshot, addDoc } from 'firebase/firestore'

import StyledApp, { MainArea } from './components/StyledApp';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import ImageWrapper from './components/ImageWrapper/ImageWrapper';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Start from './components/Start/Start';

import pokemonToFindInitialState from './lib/initialPokemonData';
import getDocsFromCollection from './lib/getDocsFromCollection';

const firebaseConfig = {
	apiKey: "AIzaSyAEDoojWpn8FDhWfYxmcxWnVGqX-UtfG_0",
	authDomain: "wheres-that-pokemon-4fe01.firebaseapp.com",
	projectId: "wheres-that-pokemon-4fe01",
	storageBucket: "wheres-that-pokemon-4fe01.appspot.com",
	messagingSenderId: "951278203238",
	appId: "1:951278203238:web:29bcec0b18d095aaf3d8a7",
	measurementId: "G-9S1N0KDQDN"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const data = getFirestore()

function App() {
  	const [pokemonToFind, setPokemonToFind] = useState(pokemonToFindInitialState)
	const [startTime, setStartTime] = useState()
	const [scores, setScores] = useState()
	const [gameState, setGameState] = useState('START')
	const [playerTime, setPlayerTime] = useState(0)
	const [testLocations, setTestLocations] = useState()

	useEffect(() => {
		const locationData = getDocsFromCollection(data, 'Pokemon Locations')
		setTestLocations(locationData)
	}, [])

	useEffect(() => {
		const unfoundPokemon = pokemonToFind.filter((mon) => 
			!mon.isFound
		)
		if (!unfoundPokemon.length) {
			const endTime = Date.now()
			const time = (endTime - startTime) / 1000
			setPlayerTime(time)
			setGameState('SCORES')
		}
	}, [pokemonToFind, startTime])

  	const pokemonIsFound = (name) => {
		const foundIndex = pokemonToFind.findIndex((pokemon) => pokemon.name === name)
		if (!pokemonToFind[foundIndex].isFound) {
			const deepCopy = [ ...pokemonToFind ]
			deepCopy[foundIndex].isFound = true
			setPokemonToFind(deepCopy)
		}
  	}

	const resetAll = () => {
		const deepCopy = [ ...pokemonToFind ]
		deepCopy.forEach(pokemon => pokemon.isFound = false)
		setPokemonToFind(deepCopy)
	}

	useEffect(
		() => onSnapshot(collection(data, 'High Scores'), (snapshot) => {
			const scores = []
			snapshot.forEach((score) => {
				scores.push({ ...score.data() })
			})
			setScores(scores)
		}), []
	)

	const checkForFind = (location, name) => {
		const [x, y] = location
		const foundTarget = testLocations.filter((target) => 
			x > target.x[0] && x < target.x[1] &&
			y > target.y[0] && y < target.y[1] &&
			target.name === name
		)
		if (foundTarget.length === 1) {
			pokemonIsFound(name)
		}
	}

	const imageLoaded = () => {
		const timeStamp = Date.now()
		setStartTime(timeStamp)
	}

	const addPlayerScore = async (name) => {
		await addDoc(collection(data, 'High Scores'), {
			name: name,
			time: playerTime
		})
	}

	const startGame = () => {
		setGameState('GAME')
	}

	const resetGame = () => {
		resetAll()
		setGameState('START')
	}

	const renderGameState = () => {
		switch (gameState) {
			case 'START':
				return <Start start={startGame} />
			case 'GAME':
				return (
					<MainArea>
						<Sidebar iconData={pokemonToFind} />
						<ImageWrapper checkCoords = {checkForFind} iconData = {pokemonToFind} imageLoaded={imageLoaded} />
				  	</MainArea>
				)
			case 'SCORES':
				return (
					<Scoreboard
						data = {scores}
						playerScore = {playerTime}
						addPlayerScore = {addPlayerScore}
						reset = {resetGame}
					/>
				)
			default :
		}
	}

  	return (
    	<StyledApp >
      		<Header />
			{renderGameState()}
    	</StyledApp>
  );
}

export default App;
