const {mongo} = require('../config/database');

class CreateController{
    Create(req, res){
        const {name, description, date, type, done} = req.body;

        //TODO make this better
        if(!name || !date){
          return res.status(400).json({'error': 'Você precisa preencher todos os campos obrigatórios!'});
        }

        mongo.collection('task').insertOne({
            'name' : name,
            'description' : description,
            'date' : date,
            'type' : type ? type : 'default',
            'done' : done ? done : false

        }).then(result => {
            res.status(200).json(result)
        }).catch(error =>{
            res.status(400).json({'error': error.message})
        })
    }

}

module.exports = new CreateController();