var express = require('express');
var router = express.Router();

var PetController = require('../controllers/pet.controller');
let baseUrl = '/api/pet'

router.get(baseUrl, PetController.getAllPetsInfo);
router.get(baseUrl+'/:petId', PetController.getPetInfo);
router.patch(baseUrl+'/:petId', PetController.updatePetInfo);
router.delete(baseUrl+'/:petId', PetController.deletePetInfo);

module.exports = router;