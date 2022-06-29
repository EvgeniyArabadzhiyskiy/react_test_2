

const VideoList = ({videoItems, onSelectLink}) => {
    return (
        <div>
            {videoItems.map(({id, link}) => (<li key={id}>
            <button type="button" onClick={() => onSelectLink(link)}>{link}</button>
            </li>))}
        </div>
        
        
    )
}

export default VideoList