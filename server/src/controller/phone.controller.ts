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

const phoneController = {getAll};

export default phoneController;