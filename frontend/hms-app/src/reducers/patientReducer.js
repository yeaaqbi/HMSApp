import { ACTION_TYPES } from '../actions/patientActions'

const initState = {
    patientsList: [],
    patientsBackupList: [],
    citiesCount: [],
    filters:null
}

export const patientReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_PATIENTS:
            return {
                ...state,
                patientsList: action.data,
                citiesCount: fecthCityCounts(action.data),
                patientsBackupList: action.data,
            }
        case ACTION_TYPES.DELETE_PATIENT:
            return {
                ...state,
                patientsList: state.patientsList.filter(patient => patient.id !== action.data),
                citiesCount: fecthCityCounts(state.patientsList.filter(patient => patient.id !== action.data))
            }
        case ACTION_TYPES.CREATE_PATIENT:
            return {
                ...state,
                patientsList: [...state.patientsList, action.data],
                citiesCount: fecthCityCounts([...state.patientsList, action.data])
            }
        case ACTION_TYPES.UPDATE_PATIENT:
            return {
                ...state,
                patientsList: state.patientsList.map(patient => patient.id == action.data.id ? action.data : patient),
                citiesCount: fecthCityCounts(state.patientsList.map(patient => patient.id == action.data.id ? action.data : patient))
            }
        case ACTION_TYPES.FILTER_PATIENTS:
            return {
                ...state,
                filters:action.data,
                patientsList: (action.data.city?state.patientsBackupList.filter(patient => patient.city == action.data.city):state.patientsBackupList),
            }
            case ACTION_TYPES.SEARCH_PATIENTS_TABLE:
                return {
                    ...state,
                    filters:action.data,
                    patientsList: filterTable(action.data,state.patientsBackupList)
                }


        default:
            return state;
    }
}
// filter records by search text
const filterTable = (value,data) => {
    const excludeColumns = ["dateOfBirth"];

    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") return data;
    else {
        const filteredData = data.filter(item => {
            return Object.keys(item).some(key =>
                excludeColumns.includes(key) ? false : (item[key] != null ?item[key].toString().toLowerCase().includes(lowercasedValue):'')
            );
        });
        return (filteredData);
    }
}
const fecthCityCounts = (patients) => {
    var departments = patients.map(entry => {
        return (entry.city)
    });
    const initialValue = {}
    const reducer = function (item, city) {
        if (!item[city]) {
            item[city] = 1;
        } else {
            item[city] = item[city] + 1;
        }
        return item;
    }
    let result = departments.reduce(reducer, initialValue);
    result = JSON.stringify(result).substring(1, JSON.stringify(result).length - 1).split(',');
    const counts = [];
    for (let index in result) {    // don't actually do this
        counts.push({ city: result[index].split(':')[0].replace(new RegExp('"', 'g'), ''), patients: result[index].split(':')[1] });
    }
    return counts;

}
