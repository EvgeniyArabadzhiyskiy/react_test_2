import { Component } from "react";
import publications from "../publications.json";
import ContentBox from "./ContentBox/ContentBox";
import Controls from "./Controls/Controls";

class Reader extends Component {
  state = {
    activeIndex: 0,
  };

  getActiveProgress = () => {
    return this.state.activeIndex + 1;
  };

  //   increment = () => {
  //     if (this.state.activeIndex < publications.length - 1) {
  //       this.setState((prevState) => {
  //         return {
  //           activeIndex: prevState.activeIndex + 1,
  //         };
  //       });
  //     }
  //   };

  //   decrement = () => {
  //     this.setState((prevState) => {
  //       if (this.state.activeIndex > 0) {
  //         return {
  //           activeIndex: prevState.activeIndex - 1,
  //         };
  //       }
  //     });
  //   };

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
    const activProg = activeIndex + 1;
    const max = activeIndex >= publications.length - 1;
    const min = activeIndex <= 0;

    return (
      <div>
        <Controls
          onPrev={() => this.changeIndex(-1)}
          onNext={() => this.changeIndex(1)}
          maxIndex={max}
          minIndex={min}
        />
        <p>
          {activProg}/{publications.length}
        </p>
        <ContentBox articles={this.findActiveArticle()} />
      </div>
    );
  }
}

export default Reader;
