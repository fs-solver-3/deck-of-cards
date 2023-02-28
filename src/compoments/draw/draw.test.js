import { render, fireEvent, screen } from "@testing-library/react";
import { Renderer } from "react-dom";
import renderer from "react-test-renderer";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import * as redux from "react-redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../store";
import { Theme } from "../../utils/theme";
import Draw from "./draw";
import { DrawContainer } from "./styled";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));
// const useDispatchMock = useDispatch;

const useDispatchSpy = jest.spyOn(redux, "useDispatch");
const mockDispatchFn = jest.fn();

const ReduxWrapper = ({ children }) => {
  <Provider store={store}>{children}</Provider>;
};
let container;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  document.body.removeChild(container);
  container = null;
});
test("Decreaments Draw remaining", () => {
  //   useDispatchSpy.mockReturnValue(mockDispatchFn);
  // mockDispatchFn.mockReturnValue([{}])
  const { container, queryByText } = render(<Draw />, {
    wrapper: ReduxWrapper,
  });
  // const tree = renderer.create(<DrawContainer />).toJSON();

  // expect(tree).toMatchSnapshot();
  // console.log({ tree });
  // const container = render(
  //   <ThemeProvider theme={Theme}>
  //     <Draw />
  //   </ThemeProvider>,
  //   { wrapper: ReduxWrapper }
  // );
  // act(() => {
  //   render(<Draw />, container);
  // });
  //   const drawBtn = container.find("draw-btn").at(0);
  // const drawBtn = screen.getByRole("Draw card");
  // const drawBtn = screen.getByRole("button", { name: /draw card/i });
  // const drawBtn = screen.getByText("Draw card");
  // const testText = screen.getAllByText("Test");
  const testText = container.querySelector("h3");
  // screen.debug(testText);

  //   const remainingDraw = screen.queryByTestId("remaining-draw");
  // fireEvent.click(getByText("Test"));
  console.log(container);
  console.log(queryByText(/test/i));

  // fireEvent.click(drawBtn);
  //   getByLabelText("Drar card").focus();
  //   fireEvent.click(document.activeElement || document.body);
  //   fireEvent.click(container.getByText("Draw card"));
  //   fireEvent.click(container.querySelector(".draw-btn"));
  //   fireEvent.change((container, ), { target: { value: "Draw card" } });

  //   drawBtn.click();
  //   expect(mockDispatchFn).toHaveBeenCalled();

  //   expect(remainingDraw).toHaveTextContent("51 cards remaining of 52");
});
