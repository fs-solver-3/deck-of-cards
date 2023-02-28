import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/fontawesome-free-solid";
import { drawCardsAction } from "../../store/drawCards/actions";
import { shuffleAction } from "../../store/shuffle/actions";
import { CardContainer, DrawContainer, DrawBtn, Text } from "./styled";
import Card from "./card";

const Draw = () => {
  const dispatch = useDispatch();
  const [drawEnd, setDrawEnd] = useState(false);
  const [goBackStep, setGoBackStep] = useState(0);
  // let goBackStep =0;

  const deckResponseSuccess = useSelector(
    (state) => state.deck.deckResponseSuccess
  );
  const deckInfo = useSelector((state) => state.deck.deckInfo);
  const deckErr = useSelector((state) => state.deck.deckErr);

  const drawCardsInfo = useSelector((state) => state.drawCards.drawCardsInfo);
  const drawCardsHistory = useSelector(
    (state) => state.drawCards.drawCardsHistory
  );
  const matchSnapValue = useSelector((state) => state.drawCards.matchSnapValue);
  const matchSnapSuit = useSelector((state) => state.drawCards.matchSnapSuit);
  const snapValueCount = useSelector((state) => state.drawCards.snapValueCount);
  const snapSuitCount = useSelector((state) => state.drawCards.snapSuitCount);

  const prevCard = drawCardsHistory[drawCardsHistory.length - 2 - goBackStep];
  const currentCard =
    drawCardsHistory[drawCardsHistory.length - 1 - goBackStep];
  console.log({ deckInfo });
  console.log({ drawCardsInfo });
  // useEffect(() => {
  //   dispatch(shuffleAction.shuffleRequest());
  // }, [dispatch]);

  const handleShuffle = () => {
    if (!drawEnd) {
      if (drawCardsInfo.remaining !== 0) {
        dispatch(drawCardsAction.drawCardsRequest(deckInfo.deck_id));
      } else {
        setDrawEnd(true);
        dispatch(drawCardsAction.drawCardsSuccess({ cards: [{}] }));
      }
    }
  };
  const goBackHandle = () => {
    setGoBackStep(goBackStep + 1);
  };
  const forwardHandle = () => {
    setGoBackStep(goBackStep - 1);
  };
  return (
    <>
      <h3>Test</h3>
      <DrawContainer>
        <Text>
          <h3>
            {deckResponseSuccess
              ? "Deck Id : " + deckInfo?.deck_id
              : deckErr + ": Note - Dummy Data!"}
          </h3>
        </Text>
        <Text>
          <h3>
            {matchSnapValue ? "SNAP VALUE!" : matchSnapSuit ? "SNAP SUIT!" : ""}
          </h3>
        </Text>
        <CardContainer>
          {goBackStep < drawCardsHistory.length - 1 && (
            <FontAwesomeIcon
              icon={faChevronCircleLeft}
              onClick={goBackHandle}
            />
          )}
          <Card {...prevCard} />
          <Card {...currentCard} />
          {goBackStep > 0 && (
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              onClick={forwardHandle}
            />
          )}
        </CardContainer>
        {drawEnd ? (
          <>
            <Text>
              <h3>VALUE MATCHES: {snapSuitCount ?? 0}</h3>
            </Text>
            <Text>
              <h3>SUIT MATCHES: {snapValueCount ?? 0}</h3>
            </Text>
          </>
        ) : (
          <>
            <Text>
              <h3 data-testid="remaining-draw">
                {drawCardsInfo.remaining ?? 0} cards remaining of 52
              </h3>
            </Text>
            <DrawBtn
              className="draw-btn"
              data-testid="draw-btn"
              onClick={handleShuffle}
            >
              {" "}
              Draw card
            </DrawBtn>
          </>
        )}
      </DrawContainer>
      <h3>Test</h3>
    </>
  );
};

export default Draw;
