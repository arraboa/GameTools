import React from "react";
import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";

class Character extends React.Component {
  renderCharacterRace = () => {
    const { RaceSvg, name } = this.props.race;
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <RaceSvg width="2em" height="2em" style={{ marginRight: "0.4em" }} />
        {name}
      </div>
    );
  };

  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header
            style={{ marginBottom: "0.2em" }}
            content={this.renderCharacterRace()}
          />
          <Card.Meta content={this.props.size + ", " + this.props.body} />
          <Card.Description content={this.props.personality} />
        </Card.Content>
      </Card>
    );
  }
}

Character.propTypes = {
  race: PropTypes.object.isRequired,
  size: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  personality: PropTypes.string.isRequired
};

export default Character;
