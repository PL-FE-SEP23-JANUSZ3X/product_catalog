import phoneService from '../service/phone.service';
import { ControllerAction } from '../utils/types';

const getAll: ControllerAction = async(req, res) => {
    try {
        const allPhones = await phoneService.getAllPhones();

        if (!allPhones) {
            res.status(404).send('Not Found: The specified entity does not exist');

            return;
        }
        res.send(allPhones);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

const getOne: ControllerAction = async(req, res) => {
    try {
        const allPhones = await phoneService.getAllPhones()

        const { id } = req.params

        res.send(allPhones[+id])
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

const getSome: ControllerAction = async(req, res) => {
    try {
        const allPhones = await phoneService.getAllPhones()
        const reversePhones = allPhones.reverse()

        console.log(reversePhones[0])

        const { start, limit } = req.params;
        
        const length = allPhones.length;
        
        const endIndex = length - parseInt(start);
        const startFromIndex = length - parseInt(limit);
        
        const somePhones = allPhones.slice(startFromIndex, endIndex);
        
        res.send(somePhones);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

const phoneController = {getAll, getOne, getSome};

export default phoneController;