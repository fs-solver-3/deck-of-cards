import styled from "styled-components";

export const DrawContainer = styled.div`
  margin-top: 30px;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
    :hover {
      color: grey;
    }
  }
`;
export const Text = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  margin-top: 10px;
`;
export const Img = styled.img`
  width: 224px;
  height: 312px;
  padding: 20px;
`;
export const SVGDiv = styled.div`
  svg {
    width: 30px;
    height: 30px;
  }
`;
export const DrawBtn = styled.button`
  display: flex;
  margin: 50px auto;
  font-size: 24px;
  padding: 10px 20px;
  color: white;
  background-color: #028cff;
  border-radius: 10px;
`;
