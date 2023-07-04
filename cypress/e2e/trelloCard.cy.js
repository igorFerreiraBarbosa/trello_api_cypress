let name = 'Board Name'
let idBoard = ''
let idList = ''
let idCard = ''

describe('POST/Create Board', () => {
    it('create a board', () => {
        cy.createBoard(name)
        .then((res) => {
            expect(res.status).to.eq(200)
            idBoard = res.body.id
        })
    });
});

describe('POST/Create List', () => {
    it('crete a list', () => {
        cy.createList(idBoard)
        .then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.idBoard).to.eq(idBoard)
            idList = res.body.id
        })
    });
});

describe('POST/Create Card', () => {
    it('create a card', () => {
        cy.createCard(idList)
        .then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.badges.description).to.eq(false)
            idCard = res.body.id
        })
    });
});

describe('DELETE/Delete Card', () => {
    it('delete a card', () => {
        cy.deleteCard(idCard)
        .then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body.limits).to.deep.equal({})
        })
    });
});

describe('DELETE/Delete Board', () => {
    it('delete a board', () => {
        cy.deleteBoard(idBoard)
        .then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body._value).to.eq(null)
        })
    });
});