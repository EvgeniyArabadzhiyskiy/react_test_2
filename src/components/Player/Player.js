import { Component } from "react";
import ReactPlayer from "react-player";

class Player extends Component {
  state = {
    isVideoLoaded: false
  };

  componentDidUpdate(prevProps) {
    if(prevProps.url !== this.props.url) {
        this.setState({isVideoLoaded: false})
        // console.log('hello');
    }
  }


  render() {
    const {isVideoLoaded} = this.state
    const { url } = this.props
    const showloader = url && !isVideoLoaded 
    console.log("showloader", showloader);
    
    return (
      <div>
        {showloader && <h2>Загружаем видео ...</h2>}
        <ReactPlayer url={url} controls onReady={() => this.setState({isVideoLoaded: true})} />
      </div>
    );
  }
}

export default Player;
