import React from "react";
import { Header, Table, Rating, Container } from "semantic-ui-react";
import { classes } from "./Classes";

const generateSpecializations = specializations => {
  return specializations.map((spe, index) => <p key={index}>- {spe}</p>);
};

const generateRow = wclass => (
  <Table.Row key={wclass.key} disabled={wclass.eliminated === true}>
    <Table.Cell
      width={1}
      content={
        <Header as="h4" textAlign="center" inverted content={wclass.name} />
      }
    />
    <Table.Cell
      width={1}
      singleLine
      content={generateSpecializations(wclass.spe)}
    />
    <Table.Cell
      width={1}
      content={
        <Rating icon="star" defaultRating={wclass.rating} maxRating={10} />
      }
    />
    <Table.Cell content={wclass.comment} />
  </Table.Row>
);

function compare(a, b) {
  if (a.eliminated !== b.eliminated) {
    return a.eliminated && !b.eliminated ? 1 : -1;
  }
  if (a.rating === b.rating) return 0;
  return a.rating < b.rating ? 1 : -1;
}

const generateRows = () =>
  classes.sort(compare).map(wclass => {
    return generateRow(wclass);
  });

const WowTable = () => (
  <Container>
    <Table celled inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Class</Table.HeaderCell>
          <Table.HeaderCell>Specialization</Table.HeaderCell>
          <Table.HeaderCell>Rating</Table.HeaderCell>
          <Table.HeaderCell>Comments</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>{generateRows()}</Table.Body>
    </Table>
  </Container>
);

export default WowTable;
