jest.setTimeout(7000)

describe("Google", () => {
  beforeAll(async () => {
    await page.goto("https://vaccine.heb.com/scheduler");
    await page.waitForNavigation(;
  });

  it("shoud be out of appointments", async (done) => {
    await expect(page).toMatch(
      "There are no appointments available, but we add new spots as we receive more vaccines. Please check back for updates."
    );
    await done();
  });
});
