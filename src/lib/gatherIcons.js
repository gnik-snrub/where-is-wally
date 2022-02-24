import FoundIcon from "../components/FoundIcon/FoundIcon"
import { v4 } from 'uuid'

const gatherIcons = (iconData, clickEffect, preview) => {
    return iconData.map((icon) => {
        return <FoundIcon
                    filePath={`${process.env.PUBLIC_URL}/${icon.name + icon.extension}`}
                    isFound={icon.isFound}
                    iconAlt={icon.name}
                    clickEffect={clickEffect}
                    preview={preview}
                    key={v4()}
                />
    })
}

export default gatherIcons