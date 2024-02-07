import Phone from '../model/phone.model';

const getAllPhones= async() => {
    return Phone.findAll();
};

const phoneService = {getAllPhones};

export default phoneService;