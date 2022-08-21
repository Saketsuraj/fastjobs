var PetService = require('../services/pet.service')   

//Get all pets info
exports.getAllPetsInfo = async function (req, res, next) {
    try {
        let pets = await PetService.getAllPetsInfo()
        return res.status(200).json({ status: true, pets: pets });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

//Get a specific pet info
exports.getPetInfo = async function (req, res, next) {
    try {
        var pet = await PetService.getPetInfo(req.params.petId)
        return res.status(200).json({ status: true, pet: pet });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

//update a pet info
exports.updatePetInfo = async function (req, res, next) {
    try {
        let petId = await PetService.updatePetInfo(req.params.petId,req.query)
        return res.status(200).json({ status: true, updatedPetId: petId });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

//delete a pet info
exports.deletePetInfo = async function (req, res, next) {
    try {
        let petId = await PetService.deletePetInfo(req.params.petId)
        return res.status(200).json({ status: true, deletedPetId: petId });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}