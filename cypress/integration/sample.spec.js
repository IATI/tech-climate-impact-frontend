describe("The Vue Template Homepage", () => {
  it("Shows the environment", () => {
    cy.visit("/");
    cy.contains("development");
  });
  it("Has a count button that increments when clicked", () => {
    cy.contains("count").click();
    cy.contains("count is: 1");
  });
});
