const {mongo, ObjectId} = require('../config/database');

class ListController{

  List(req, res){
    if(!req.query.done){
      return res.status(400).json({'error': 'Missing "done", true for completed, false for pending tasks'});
    }

    mongo.collection('task').find({done: req.query.done === "true" ? true : false}).toArray().then(result => {
      return res.status(200).json(result);
    }).catch(error => {
      return res.status(400).json({'error': error.message});
    })
  }

 ListById(req, res){
     const { id } = req.params;
     mongo.collection('task').findOne({_id: ObjectId(id)}).then(result => {
         return res.status(200).json(result);
     }).catch(error => {
         return res.status(400).json({'error': error.message});
     })
 }






}
module.exports = new ListController();