let name = 'Board Name'

describe('POST/Create Board', () => {
    it('create a board', () => {
        cy.createBoard(name)
        .then((res) => {
            expect(res.status).to.eq(200)
        })
    });
});