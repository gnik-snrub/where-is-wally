import StyledImage from './StyledImage'

const Image = (props) => {
    const {clickEvent, loadEvent} = props
    
    const click = (e) => {
        clickEvent(e)
    }

    const load = (e) => {
        loadEvent(e)
    }
    return (
        <StyledImage
            src={`${process.env.PUBLIC_URL}/Pokemon2.jpg`}
            onClick={click}
            onLoad={load}
            alt='Pokemon Collection'
        />
    )
}

export default Image