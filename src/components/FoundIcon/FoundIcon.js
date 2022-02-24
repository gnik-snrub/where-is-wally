import StyledFoundIcon, { IconImage } from "./StyledFoundIcon"

const FoundIcon = (props) => {
    const {filePath, iconAlt, isFound, clickEffect, preview} = props

    const click = () => {
        clickEffect(iconAlt)
    }

    return (
        <StyledFoundIcon>
            <IconImage src={filePath} alt={iconAlt} onClick={click} shadow={!isFound} preview={preview} />
        </StyledFoundIcon>
        
    )
}

export default FoundIcon