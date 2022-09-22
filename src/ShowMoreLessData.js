const ShowMoreButton = props => {
    return (
        <a href="#" onClick={props.changeTableSize}>{props.text}</a>
    )
}
export default ShowMoreButton;