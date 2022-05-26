import "./Tabs.css";
import React, { Component } from "react";
// import React, { PureComponent } from 'react'
import classNames from "classnames";

class Tabs extends Component {
  state = {
    activeTabIndex: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabIndex !== this.state.activeTabIndex;
  }

  setActivTabIndex = (index) => {
    this.setState({ activeTabIndex: index });
  };

  makeClassList = (index) => {
    return classNames("Tabs", "btn", {
      Tabs__activ: index === this.state.activeTabIndex,
    });
  };

  render() {
    console.log("hello");

    const { activeTabIndex } = this.state;
    const { items } = this.props;
    const activTab = items[activeTabIndex];

    return (
      <div>
        {this.props.items.map((item, index) => (
          <button
            className={this.makeClassList(index)}
            type="button"
            key={item.label}
            onClick={() => this.setActivTabIndex(index)}
          >
            {item.label}
          </button>
        ))}
        <h2>{activTab.label}</h2>
        <p>{activTab.content}</p>
      </div>
    );
  }
}

export default Tabs;
