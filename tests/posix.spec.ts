import { posix } from "../src/index";

test("Test format path", () => {
    const target = "/home/user";
    expect(posix.join("/", "home", "user")).toBe(target);
});
