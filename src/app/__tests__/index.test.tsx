import React from "react";
import { render, waitFor } from "@testing-library/react-native";
import Home from "../index";

jest.mock("../../context/ctx", () => ({
  useSession: jest.fn(),
}));

jest.mock('expo-router', () => ({
  Redirect: jest.fn().mockImplementation(({ href }) => <></>),
}));

import { useSession } from "../../context/ctx";
import { Redirect } from "expo-router";

const mockedUseSession = useSession as jest.MockedFunction<typeof useSession>;

describe("Home Component", () => {
  it("should display loading text when loading", () => {
    mockedUseSession.mockReturnValue({
      signIn: jest.fn(),
      signOut: jest.fn(),
      session: null,
      isLoading: true,
      loading: false,
    });
    const { getByText } = render(<Home />);
    expect(getByText("Loading...")).toBeTruthy();
  });

  it("should render LoginForm if there is no session", () => {
    mockedUseSession.mockReturnValue({
      signIn: jest.fn(),
      signOut: jest.fn(),
      session: null,
      isLoading: false,
      loading: false,
    });
    const { getByTestId } = render(<Home />);
    expect(getByTestId("login-form")).toBeTruthy();
  });

  it("should redirect when there is a session", async () => {
    mockedUseSession.mockReturnValue({
      signIn: jest.fn(),
      signOut: jest.fn(),
      session: "user",
      isLoading: false,
      loading: false,
    });

    render(<Home />);

    await waitFor(() => {
      expect(Redirect).toHaveBeenCalledWith(
        expect.objectContaining({ href: "/(tabs)" }),
        expect.anything()
      );
    });
  });
});
