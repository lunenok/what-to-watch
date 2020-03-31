import React, {PureComponent} from "react";

const withActiveCard = (Component) => {
  class WithActiveCard extends PureComponent {

    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false
      };
      this._onCardMouseHoverOn = this._onCardMouseHoverOn.bind(this);
      this._onCardMouseHoverOff = this._onCardMouseHoverOff.bind(this);
      this.timerId = null;
    }

    _onCardMouseHoverOn() {
      this.timerId = setTimeout(() => {
        this.setState({
          isPlaying: true
        });
      }, 1000);
    }

    _onCardMouseHoverOff() {
      this.setState({
        isPlaying: false
      });
      clearTimeout(this.timerId);
    }

    componentWillUnmount() {
      clearTimeout(this.timerId);
    }

    render() {
      const {isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          onMouseEnter={this._onCardMouseHoverOn}
          onMouseLeave={this._onCardMouseHoverOff}
          isPlaying={isPlaying}
        />
      );
    }
  }

  return WithActiveCard;

};

export default withActiveCard;
