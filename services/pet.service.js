let petModel = require('../models/petModel') 

//Get all pets info
exports.getAllPetsInfo = async function () {
    try {
        let pets = await petModel.find({})
        return pets
    } catch (e) {
        console.log(e)
        // Log Errors
        throw Error('Unable to get all the pets info. Try again.')
    }
}

//Get a specific pet info
exports.getPetInfo = async function (petId) {
    try {
        let petInfo = petModel.find({_id:petId})
        return petInfo
    } catch (e) {
        // Log Errors
        throw Error('Unable to get a specific pet info. Try again.')
    }
}

//update a pet info
exports.updatePetInfo = async function (petId, query) {
    try {
        let updatedInfo = await petModel.findOneAndUpdate({_id:petId},query);
        return petId
    } catch (e) {
        // Log Errors
        throw Error('Unable to update pet info. Try again.')
    }
}

//delete a pet info
exports.deletePetInfo = async function (petId) {
    try {
        let deletedInfo = await petModel.deleteOne({_id:petId});
        return petId
    } catch (e) {
        // Log Errors
        throw Error('Unable to delete pet info. Try again.')
    }
}