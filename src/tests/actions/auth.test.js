import { login, logout } from "../../actions/auth";

test("should return an empty object", () => {
  const action = logout();
  expect(action).toEqual({ type: "LOGOUT" });
});

test("should return an object with uid", () => {
  const action = login("123");
  expect(action).toEqual({ type: "LOGIN", uid: "123" });
});
