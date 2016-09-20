/**
 * ImdbController
 *
 * @description :: Server-side logic for managing imdbs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var imdb = require('imdb-api');

module.exports = {
	index: function(req,res){
        sails.log.info(`${req.method}: ${req.path}`);
        Imdb.find().then(function(response){
            res.ok(response);
        });
    },
    add: function(req,res){
        const id = req.param('id');
        if(!id){
            res.badRequest('Parameter Missing');
        }else{
            imdb.getReq({id: id},function(err,things){
                if(err){
                    console.log(err);
                    res.notFound();
                }else{
                    Imdb.findOrCreate({imdbid: id},{things}).then(function(response){
                        res.ok(response);
                    });
                }
            });
        }
    },
};

