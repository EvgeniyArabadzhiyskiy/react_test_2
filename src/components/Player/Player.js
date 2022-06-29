import { PureComponent } from "react";
import ReactPlayer from "react-player";

class Player extends PureComponent {
  state = {
    isVideoLoaded: false,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ isVideoLoaded: false });
    }
  }

  render() {
    const { isVideoLoaded } = this.state;
    const { url } = this.props;
    const showloader = url && !isVideoLoaded;
    const plaerSize = isVideoLoaded ? "100%" : 0

    return (
      <div style={{width: 710, height: 400}}>
        {showloader && <h2>Загружаем видео ...</h2>}
        <ReactPlayer
          url={url}
          width={plaerSize}
          height={plaerSize}
          onReady={() => this.setState({ isVideoLoaded: true })}
          controls
        />
      </div>
    );
  }
}

export default Player;
