import { win32 } from "../src/index";

test("Test format path", () => {
    const target = "c:\\Usuários\\John Doe";
    expect(win32.join("c:", "Usuários", "John Doe")).toBe(target);
});
