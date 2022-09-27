import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  height: 70px;
  position: relative;
`;
export const HeaderLeft = styled.div`
  h3 {
    margin: 10px;
    position: absolute;
    bottom: 0px;
  }
`;
export const HeaderRight = styled.div`
  position: absolute;
  bottom: 7px;
  right: 0px;
  svg {
    margin: 5px;
  }
`;
