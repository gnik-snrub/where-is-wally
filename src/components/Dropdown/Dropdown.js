import gatherIcons from "../../lib/gatherIcons"
import { StyledIconList } from "../Sidebar/StyledSidebar"
import StyledDropdown from "./StyledDropdown"

const Dropdown = (props) => {
	const {iconData, clickEffect, loc, fade} = props
	const [x, y] = loc
	
	const selectChoice = (name) => {
		clickEffect(name)
	}

    return(
      	<StyledDropdown left={x} top={y} out={fade}>
			<section>
				<span>Which Pokemon is this?</span>
				<StyledIconList>
					{gatherIcons(iconData, selectChoice)}
				</StyledIconList>
			</section>
		</StyledDropdown>
    )
}

export default Dropdown