import { shallow } from "enzyme";
import * as React from "react";
import App from ".";

describe("Main App entry point", () => {
  const wrapper = shallow(<App />);
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toHaveLength(1);
  });

  it("looks as expected", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
