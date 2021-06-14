import reducer from "../reducer/auth";
import * as actionTypes from "./actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      loading: false,
      token: null,
      userId: null,
      error: null,
      authRedirectPath: "/",
    });
  });

  it("it should store the token upon login", () => {
    expect(
      reducer(
        {
          loading: false,
          token: null,
          userId: null,
          error: null,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token",
          userId: "user-id",
        }
      )
    ).toEqual({
      loading: false,
      token: "some-token",
      userId: "user-id",
      error: null,
      authRedirectPath: "/",
    });
  });
});
