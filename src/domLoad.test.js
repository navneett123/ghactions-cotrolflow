const fs = require("fs");
const path = require("path");

describe("CloudDash Feedback DOM Load", () => {
  beforeEach(() => {
    // Read your actual HTML from the public folder
    const html = fs.readFileSync(
      path.resolve(__dirname, "../public/index.html"),
      "utf8"
    );
    document.documentElement.innerHTML = html;
  });

  test("should load the submit button", () => {
    const button = document.querySelector("button");
    expect(button).toBeTruthy();
    expect(button.textContent).toContain("Submit Feedback");
  });

  test("should load the heading", () => {
    const heading = document.querySelector("h1");
    expect(heading.textContent).toContain("CloudDash Feedback");
  });
});
