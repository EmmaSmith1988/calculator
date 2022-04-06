describe("The Main page loads", () => {
  it("Loads successfully", () => {
    cy.visit("http://127.0.0.1:5501/index.html")
  })
})

describe("Basic operations - single digits", () => {
  it("Can perform addition, 5 + 6 = 11", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5501/index.html")
    //Act
    cy.get("[data-cy=five").click();
    cy.get("[data-cy=plus").click();
    cy.get("[data-cy=six").click();
    cy.get("[data-cy=equals").click();
    //Assert
    cy.get("[data-cy=display]").should("have.text", 11);
  })
  it("Can perform subtraction, 9 - 2 = 7", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5501/index.html")
    //Act
    cy.get("[data-cy=nine").click();
    cy.get("[data-cy=minus").click();
    cy.get("[data-cy=two").click();
    cy.get("[data-cy=equals").click();
    //Assert
    cy.get("[data-cy=display]").should("have.text", 7);
  })
  it("Can perform multiplication, 4 * 5 = 20", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5501/index.html")
    //Act
    cy.get("[data-cy=four").click();
    cy.get("[data-cy=multiply").click();
    cy.get("[data-cy=five").click();
    cy.get("[data-cy=equals").click();
    //Assert
    cy.get("[data-cy=display]").should("have.text", 20);
  })
  it("Can perform division, 8 / 2 = 4", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5501/index.html")
    //Act
    cy.get("[data-cy=eight").click();
    cy.get("[data-cy=divide").click();
    cy.get("[data-cy=two").click();
    cy.get("[data-cy=equals").click();
    //Assert
    cy.get("[data-cy=display]").should("have.text", 4);
  })
})

describe("Basic operations - multiple digits", () => {
  it("Can perform addition, 21 + 17 = 38", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5501/index.html")
    //Act
    cy.get("[data-cy=two").click();
    cy.get("[data-cy=one").click();
    cy.get("[data-cy=plus").click();
    cy.get("[data-cy=one").click();
    cy.get("[data-cy=seven").click();
    cy.get("[data-cy=equals").click();
    //Assert
    cy.get("[data-cy=display]").should("have.text", 38);
  })
  it("Can perform subtraction, 865 - 56 = 809", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5501/index.html")
    //Act
    cy.get("[data-cy=eight").click();
    cy.get("[data-cy=six").click();
    cy.get("[data-cy=five").click();
    cy.get("[data-cy=minus").click();
    cy.get("[data-cy=five").click();
    cy.get("[data-cy=six").click();
    cy.get("[data-cy=equals").click();
    //Assert
    cy.get("[data-cy=display]").should("have.text", 809);
  })
  it("Can perform multiplication, 75 * 156 = 11700", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5501/index.html")
    //Act
    cy.get("[data-cy=seven").click();
    cy.get("[data-cy=five").click();
    cy.get("[data-cy=multiply").click();
    cy.get("[data-cy=one").click();
    cy.get("[data-cy=five").click();
    cy.get("[data-cy=six").click();
    cy.get("[data-cy=equals").click();
    //Assert
    cy.get("[data-cy=display]").should("have.text", 11700);
  })
  it("Can perform division, 85 / 20 = 4.25", () => {
    //Arrange
    cy.visit("http://127.0.0.1:5501/index.html")
    //Act
    cy.get("[data-cy=eight").click();
    cy.get("[data-cy=five").click();
    cy.get("[data-cy=divide").click();
    cy.get("[data-cy=two").click();
    cy.get("[data-cy=zero").click();
    cy.get("[data-cy=equals").click();
    //Assert
    cy.get("[data-cy=display]").should("have.text", 4.25);
  })
})

describe("Chained operations", () => {
  it("Can perform chained addition and subtraction, 56 + 17 - 45 + 2 = 30", () => {
    cy.visit("http://127.0.0.1:5501/index.html")
    //Act
    cy.get("[data-cy=five").click();
    cy.get("[data-cy=six").click();
    cy.get("[data-cy=plus").click();
    cy.get("[data-cy=one").click();
    cy.get("[data-cy=seven").click();
    cy.get("[data-cy=minus").click();
    cy.get("[data-cy=four").click();
    cy.get("[data-cy=five").click();
    cy.get("[data-cy=plus").click();
    cy.get("[data-cy=two").click();
    cy.get("[data-cy=equals").click();
    //Assert
    cy.get("[data-cy=display]").should("have.text", 30);
  })
})