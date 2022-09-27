import { Img } from "./styled";
import Back from "../../assets/back.jpeg";

const Card = (card) => {
  return <Img src={card?.image ?? Back} alt={card?.code ?? ""} />;
};

export default Card;
