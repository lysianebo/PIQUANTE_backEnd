const Sauces = require('../models/Sauces');
const fs = require('fs');


//const Sauce = require('../models/Sauces');

exports.likeSauces = (req, res, next) => {
  Sauces.findOne({ _id: req.params.id })
    .then(sauce => {
      switch(req.body.like) {
        case 1:
          // Ajouter l'utilisateur à la liste des utilisateurs ayant aimé la sauce
          sauce.usersLiked.push(req.body.userId);
          sauce.likes++;
          break;
        case 0:
          // Retirer l'utilisateur de la liste des utilisateurs ayant aimé ou n'ayant pas aimé la sauce
          if (sauce.usersLiked.includes(req.body.userId)) {
            sauce.usersLiked.splice(sauce.usersLiked.indexOf(req.body.userId), 1);
            sauce.likes--;
          } else if (sauce.usersDisliked.includes(req.body.userId)) {
            sauce.usersDisliked.splice(sauce.usersDisliked.indexOf(req.body.userId), 1);
            sauce.dislikes--;
          }
          break;
        case -1:
          // Ajouter l'utilisateur à la liste des utilisateurs n'ayant pas aimé la sauce
          sauce.usersDisliked.push(req.body.userId);
          sauce.dislikes++;
          break;
        default:
          throw "Invalid like value";
      }
      sauce.save()
        .then(() => {
          res.status(200).json({ message: "Like updated successfully" });
        })
        .catch(error => {
          res.status(400).json({ error });
        });
    })
    .catch(error => {
      res.status(404).json({ error });
    });
};
