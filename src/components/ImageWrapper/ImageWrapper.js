import { useEffect, useState } from 'react'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import Dropdown from '../Dropdown/Dropdown'
import Image from '../Image/Image'
import StyledImageWrapper from './StyledImageWrapper'

const ImageWrapper = (props) => {
    const { checkCoords, iconData, imageLoaded } = props

    const [fadeOutDropown, setFadeOutDropdown] = useState(false)
    const [aboutToDismount, setAboutToDismount] = useState(false)
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const [dropdownCoords, setDropdownCoords] = useState([])
    const [targetCoords, setTargetCoords] = useState([])
    const {height, width} = useWindowDimensions()

    // Due to the timeout to see the fadeout animation in fadeDropdown(), an error is created on the final icon being selected
    // as the ImageWrapper component is dismounted, and then afterwards the state change within the setTimeout is triggered.
    // So, this useEffect keeps track of the game progress, and disables the timeout for the final selection.
    useEffect(() => { 
        const remainingIcons = iconData.filter((icon) => {
            return !icon.isFound
        })
        if (remainingIcons.length === 1) {
            setAboutToDismount(true)
        }
    }, [iconData])

    const click = (e) => {
        if (!dropdownVisible) {
            generateDropdown(e)
            specifyTarget(e)
        } else {
            fadeDropdown()
        }
    }

    const fadeDropdown = () => {
        setFadeOutDropdown(true)
        if (!aboutToDismount) {
            setTimeout(() => {
                setDropdownVisible(false)
            }, 200)
        }
    }

    const generateDropdown = (e) => {
        const sanitizedDropdownCoords = checkDropdownWithinBounds(e.clientX, e.clientY)
        setDropdownCoords(sanitizedDropdownCoords)
        setFadeOutDropdown(false)
        setDropdownVisible(true)
    }

    const checkDropdownWithinBounds = (x, y) => {
        let sanitizedX = x
        let sanitizedY = y
        const dropdownDimensions = {x: 330, y: 335.25}
        const dropdownRight = x + dropdownDimensions.x
        const dropdownTop = y + dropdownDimensions.y
        if (dropdownRight > width) {
            sanitizedX = width - dropdownDimensions.x - 50 // 50 is an arbitrary buffer to give it some space
        }
        if (dropdownTop > height) {
            sanitizedY = height - dropdownDimensions.y - 50
        }
        return [sanitizedX, sanitizedY]
    }

    const specifyTarget = (e) => {
        const currElement = e.target.getBoundingClientRect()
        const xCoord = e.clientX - currElement.left
        const yCoord = e.clientY - currElement.top
        setTargetCoords([xCoord, yCoord])
    }

    const load = () => {
        imageLoaded()
    }

    const getDropdown = () => {
        return <Dropdown 
                    loc={dropdownCoords}
                    iconData={iconData}
                    clickEffect={selectFromDropdown}
                    fade={fadeOutDropown}
                />
    }

    const selectFromDropdown = (name) => {
        checkCoords(targetCoords, name)
        fadeDropdown()
    }
    
    return (
        <StyledImageWrapper>
            <Image clickEvent={click} loadEvent={load} />
            {dropdownVisible ? getDropdown() : null}
        </StyledImageWrapper>
    )
}

export default ImageWrapper