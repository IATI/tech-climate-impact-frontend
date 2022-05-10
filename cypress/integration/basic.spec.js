describe("The TCI Dashboard Homepage", () => {
  it("Shows the homepage header", () => {
    cy.visit("/");
    cy.contains("IATI Technical Climate Impact");
  });
  it("Gets table data from API and displays", () => {
    cy.intercept("/api/metrics", { fixture: "metrics" }).as("matchedUrl");
    cy.visit("/table");
  });
});
