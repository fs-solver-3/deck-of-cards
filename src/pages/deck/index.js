import { DeckContainer } from "./styled";
import Header from "../../compoments/header";
import Draw from "../../compoments/draw";

const Deck = () => {
  return (
    <DeckContainer data-testid="deck">
      <Header />
      <Draw />
    </DeckContainer>
  );
};

export default Deck;
