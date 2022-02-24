import gatherIcons from '../../lib/gatherIcons'
import StyledSidebar, { StyledIconList } from './StyledSidebar'

const Sidebar = (props) => {
    const {iconData} = props

    return (
        <StyledSidebar>
            <h2>List</h2>
            <StyledIconList>
                {gatherIcons(iconData, ()=>{}, true)}
            </StyledIconList>
        </StyledSidebar>
    )
}

export default Sidebar