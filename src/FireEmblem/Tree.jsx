import React from "react";
import PropTypes from "prop-types";
import Mermaid from "../Containers/Mermaid";

class Tree extends React.Component {
  constructor(props) {
    super(props);

    const graph = this.generateGraph();
    console.log(this.props.id, graph);
    this.state = {
      graph: this.generateGraph()
    };
  }

  formatNode = node =>
    node +
    this.props.description.leftWrapper +
    node +
    this.props.description.rightWrapper;

  addLink = link => {
    let linkFormat =
      link.length > 2
        ? this.props.description.lineLink
        : this.props.description.arrowLink;
    return (
      this.formatNode(link[0]) + linkFormat + this.formatNode(link[1]) + ";"
    );
  };

  generateGraph = () =>
    this.props.description.graphType +
    this.props.description.links.map(link => this.addLink(link)).join("");

  render() {
    return (
      <div
        style={{
          backgroundColor: this.props.color,
          borderRadius: "15px"
        }}
      >
        <Mermaid id={this.props.id} content={this.state.graph} />
      </div>
    );
  }
}

Tree.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.string,
  description: PropTypes.shape({
    graphType: PropTypes.string.isRequired,
    leftWrapper: PropTypes.string.isRequired,
    rightWrapper: PropTypes.string.isRequired,
    arrowLink: PropTypes.string.isRequired,
    lineLink: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired
  })
};

export default Tree;
