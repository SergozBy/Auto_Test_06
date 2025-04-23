it("Should successfully login and check empty Favorites", () => {
    // Login
    cy.visit('/');
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
    
    // Check empty "Favorites"
    cy.contains("Favorites").click();
    cy.contains("Please add some book to favorit on home page!").should("be.visible");
    cy.contains("Please add some book to favorit on home page!").click();
    cy.contains("Add new").should("be.visible");
})

it("Should add new book", () => {
    // Login
    cy.visit('/');
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");

    // Add new book
    cy.contains("Add new").click();
    cy.contains("Book description").should("be.visible");
    cy.get("#title").type("Cold space");
    cy.get("#description").type("A fantastic story about the adventures of Captain Blood");
    cy.get("#authors").type("Sergey Bykhavets");
    cy.contains("Submit").click();

    // Check that new book was appired on list
    cy.contains("Cold space").should("be.visible");
})

it("Should not login with empty password", () => {
    // Login
    cy.visit('/');
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");

    // Add existed book on favorites
    cy.contains("Cold space").should("be.visible");
    cy.contains("Add to favorite").click();

    // Check that book appired on "Favorites"
    cy.contains("Favorites").click();
    cy.contains("Cold space").should("be.visible");
})