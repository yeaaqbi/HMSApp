import axios from 'axios'

const baseUrl = "http://localhost:5000/api/";

export default {

    patients(url = baseUrl + 'Patient/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }

    },
    departments(url = baseUrl + 'Department/') {
        return {
            fetchAll: () => axios.get(url),
        }

    },
    patientRecords(url = baseUrl + 'PatientRecord/') {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
        }

    }

}