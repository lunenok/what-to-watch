import React, {PureComponent} from "react";

const TabNames = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`
};

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTab: TabNames.OVERVIEW,
      };

      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick(evt, tabName) {
      evt.preventDefault();

      this.setState({
        currentTab: tabName,
      });
    }

    render() {

      return (
        <Component
          {...this.props}
          currentTab={this.state.currentTab}
          onTabClick={this._handleTabClick}
        />
      );
    }
  }

  return WithActiveTab;
};

export default withActiveTab;
