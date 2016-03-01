module.exports = (app) => {

    app.get('/', (req, res) => {
        var greeting = req.query.greeting;

        res.type("application/json")
        res.status(200)
        res.send(JSON.stringify({"greeting": greeting}))
    });
}