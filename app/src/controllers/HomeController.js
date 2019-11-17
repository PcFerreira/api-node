class HomeController{
    IndexPage(req, res){
        res.status(200).send(
            `
            Hello!
            `
        );
    }
}

module.exports = new HomeController();
