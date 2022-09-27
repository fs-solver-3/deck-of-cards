import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/fontawesome-free-regular";
import { HeaderContainer, HeaderLeft, HeaderRight } from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <h3>SANP!</h3>
      </HeaderLeft>
      <HeaderRight>
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={faCircle} />
        <FontAwesomeIcon icon={faCircle} color="green" />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;
