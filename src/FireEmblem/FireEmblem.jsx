import React from "react";
import { Container, Header } from "semantic-ui-react";
import Tree from "./Tree";
import {
  physicalClassTreeDescription,
  magicalClassTreeDescription,
  relationshipsTreeDescription
} from "./TreesDescription";

class FireEmblem extends React.Component {
  render() {
    return (
      <Container>
        <Header as="h1">Classes tree</Header>
        <Header as="h2">Physical</Header>
        <Tree
          id="physicalGraph"
          color="#ADA"
          description={physicalClassTreeDescription}
        />
        <Header as="h2">Magical</Header>
        <Tree
          id="magicalGraph"
          color="#AAD"
          description={magicalClassTreeDescription}
        />

        <Header as="h1">Relationships</Header>
        <Tree
          id="relationshipsGraph"
          color="#DAA"
          description={relationshipsTreeDescription}
        />
      </Container>
    );
  }
}

export default FireEmblem;
