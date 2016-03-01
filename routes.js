module.exports = (app) => {

    app.get('/', (req, res) => {
        var greeting = req.query.greeting;

        res.type("application/json")
        res.status(200)
        res.type('html')
        res.sendFile('main_page.html', {root: __dirname + '/views/'});
    });
}