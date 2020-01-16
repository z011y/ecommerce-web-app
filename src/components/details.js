import React, { Component } from "react";

class Details extends Component {
  renderChildren = () => {
    const { links, info } = this.props;
    let children = [];
    if (links) {
      children = links.map(link => {
        return (
          <div className="details__link-wrapper">
            <a key={link._id} onClick={link.onClick} className="details__link">
              {link.title}
            </a>
          </div>
        );
      });
    } else if (info) {
      children = info.map(item => {
        return (
          <div key={item._id} className="details__item">
            {item.title}
          </div>
        );
      });
    }
    return children;
  };

  render() {
    const { className, title, links, info } = this.props;
    return (
      <div className={`${className} details`}>
        <div className="details__title">{title}</div>
        <div className="details__links">{this.renderChildren()}</div>
      </div>
    );
  }
}

export default Details;
