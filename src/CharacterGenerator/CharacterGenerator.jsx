import React from "react";
import { Button, Container, Header } from "semantic-ui-react";
import { races, sizes, bodies, personalities } from "./Characteristics";
import Character from "./Character";

const getRandomIn = array => array[Math.floor(Math.random() * array.length)];

class CharacterGenerator extends React.Component {
  state = { isCharacter: false, characters: [] };

  generateCharacter = () => {
    this.setState({
      isCharacter: true,
      characters: [
        {
          race: getRandomIn(races),
          size: getRandomIn(sizes),
          body: getRandomIn(bodies),
          personality: getRandomIn(personalities)
        },
        ...this.state.characters
      ]
    });
  };

  render() {
    return (
      <Container>
        <Header as="h1">Character Generator</Header>
        <Button onClick={() => this.generateCharacter()}>
          Générer un personnage aléatoire
        </Button>
        {this.state.characters.map((character, index) => (
          <Character
            key={index}
            race={character.race}
            size={character.size}
            body={character.body}
            personality={character.personality}
          />
        ))}
      </Container>
    );
  }
}

export default CharacterGenerator;
