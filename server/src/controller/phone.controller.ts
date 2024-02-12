import phoneService from '../service/phone.service';
import SortType from '../types/sortType';
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

const getSortedPhones: ControllerAction = async(req, res) => {
    try {
        const allPhones = await phoneService.getAllPhones();

        const { sortType, start, limit, order } = req.params
        const { startIndex, limitIndex } = { startIndex: +start, limitIndex: +limit };

        let sortedPhones = []

        switch (sortType) {
            case SortType.ALPHABETIC:
                sortedPhones = allPhones.sort((a, b) => {
                    if (a.name && b.name) {
                        return a.name.localeCompare(b.name)
                    }
                    return 0;
                })
            case SortType.DATE_RANGE:
                sortedPhones = allPhones
                break;
            case SortType.PRICE: 
                sortedPhones = allPhones.sort((a, b) => {
                    const priceA = a.priceDiscount ?? a.priceRegular;
                    const priceB = b.priceDiscount ?? b.priceRegular;
                    if (priceA && priceB) {
                        return priceA - priceB;
                    }
                    return 0;
                })
                break;
            default:
                sortedPhones = allPhones;
                break;
        }
        
        if (order === 'desc') {
            sortedPhones = sortedPhones.reverse()
        }

        res.json(sortedPhones.slice(startIndex, limitIndex))
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

const phoneController = {getAll, getOne, getSortedPhones};

export default phoneController;