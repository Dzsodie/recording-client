describe("Recording List App", () => {
    beforeEach(() => {
      cy.visit("http://localhost:5173");
    });
  
    it("loads the recording list", () => {
      cy.get("h2").should("contain", "Recording List");
    });
  
    it("updates medication field and verifies change", () => {
      cy.get("input").first().type("Paracetamol");
      cy.get("input").first().should("have.value", "Paracetamol");
    });
  });
  