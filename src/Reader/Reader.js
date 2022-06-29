import { Component } from "react";
import publications from "../publications.json";
import ContentBox from "./ContentBox/ContentBox";
import Controls from "./Controls/Controls";
import Progress from "./Progress/Progress";

class Reader extends Component {
  state = {
    activeIndex: 0,
  };

  LS_KEY = "reader-item";
  componentDidMount() {
    const savedItem = localStorage.getItem(this.LS_KEY);

    if (savedItem) {
        this.setState({ activeIndex: Number(savedItem) });
    }

    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.activeIndex !== prevState.activeIndex) {
      localStorage.setItem(this.LS_KEY, JSON.stringify(this.state.activeIndex));
    }
  }

  changeIndex = (value) => {
    this.setState((prevState) => {
      return {
        activeIndex: prevState.activeIndex + value,
      };
    });
  };

  findActiveArticle = () => {
    return publications[this.state.activeIndex];
  };

  render() {
    const { activeIndex } = this.state;
    const activProgres = activeIndex + 1;
    const totalItems = publications.length;
    const maxProgress = activProgres >= totalItems;
    const minProgress = activProgres === 1;

    return (
      <div>
        <Controls
          onChange={this.changeIndex}
          maxIndex={maxProgress}
          minIndex={minProgress}
        />
        <Progress current={activProgres} total={totalItems} />
        <ContentBox articles={this.findActiveArticle()} />
      </div>
    );
  }
}

export default Reader;
