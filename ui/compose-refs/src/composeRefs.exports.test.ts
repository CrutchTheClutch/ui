import { composeRefs } from ".";

test("exports", () => {
  expect(typeof composeRefs).toEqual("function");
  expect(typeof composeRefs((e) => {})).toEqual("function");
});
