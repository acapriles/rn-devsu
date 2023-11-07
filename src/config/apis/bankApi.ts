import axios from "axios";


const baseURL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros';

const bankApi = axios.create({
    baseURL,
    headers: {
        'authorId': 666,
    }
});

export default bankApi;