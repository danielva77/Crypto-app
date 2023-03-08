import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Carteras from "../Components/Carteras/Carteras";

describe('Carteras', () => {

  it('renders section 1', () => {
    const { getByTestId } = render(<BrowserRouter>
      <Carteras />
    </BrowserRouter>);
    const section1 = getByTestId('sec-8');
    expect(section1).toBeInTheDocument();
  });
})