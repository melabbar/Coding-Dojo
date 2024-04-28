const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api/authors', AuthorController.findAll)
    app.get('/api/authors/:id', AuthorController.getOneAuthor);
    app.post('/api/authors/new', AuthorController.newAuthor)
    app.patch('/api/authors/:id/edit', AuthorController.updateAuthor)
    app.delete('/api/authors/delete/:id', AuthorController.deleteOneAuthor)
}