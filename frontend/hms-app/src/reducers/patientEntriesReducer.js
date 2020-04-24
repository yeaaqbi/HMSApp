import { ACTION_TYPES } from '../actions/patientEntriesActions'

const initState = {
    entriesList: [],
    summuryInfo: {
        entriesCount: 0,
        departmentsVisited: 0,
        billsAvg: 0
    },
    departmentsCount: [],
    entriesBackupList: [],
}

export const patientEntriesReducer = (state = initState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ENTRIES:
            return {
                ...state,
                entriesList: (action.patientId !== 0 ? action.data.filter(entry => entry.patientId === action.patientId) : action.data),
                summuryInfo: {
                    entriesCount: action.data.filter(entry => entry.patientId === action.patientId).length,
                    departmentsVisited: action.data.filter(entry => entry.patientId === action.patientId).map(item => item.departmentId).filter((value, index, self) => self.indexOf(value) === index).length,
                    billsAvg: Number((action.data.filter(entry => entry.patientId === action.patientId).reduce((a, b) => a + b['bill'], 0) / action.data.filter(entry => entry.patientId === action.patientId).length).toFixed(1))
                },
                departmentsCount: fecthDepartmentsCounts(action.patientId !== 0 ? action.data.filter(entry => entry.patientId === action.patientId) : action.data),
                entriesBackupList: action.data
            }
        case ACTION_TYPES.CREATE_ENTRY:
            return {
                ...state,
                entriesList: [...state.entriesList, action.data],
                summuryInfo: {
                    entriesCount: state.entriesList.length + 1,
                    departmentsVisited: [...state.entriesList, action.data].map(item => item.departmentId).filter((value, index, self) => self.indexOf(value) === index).length,
                    billsAvg: Number(([...state.entriesList, action.data].reduce((a, b) => a + b['bill'], 0) / [...state.entriesList, action.data].length).toFixed(1))
                },
                departmentsCount: fecthDepartmentsCounts([...state.entriesList, action.data])
            }
        case ACTION_TYPES.UPDATE_ENTRY:
            return {
                ...state,
                entriesList: state.entriesList.map(entry => entry.id === action.data.id ? action.data : entry),
                summuryInfo: {
                    ...state.summuryInfo,
                    departmentsVisited: state.entriesList.map(entry => entry.id === action.data.id ? action.data : entry).map(item => item.departmentId).filter((value, index, self) => self.indexOf(value) === index).length,
                    billsAvg: Number((state.entriesList.map(entry => entry.id === action.data.id ? action.data : entry).reduce((a, b) => a + b['bill'], 0) / state.entriesList.length).toFixed(1))
                },
                departmentsCount: fecthDepartmentsCounts(state.entriesList.map(entry => entry.id === action.data.id ? action.data : entry))

            }
        case ACTION_TYPES.FILTER_ENTRIES:
            return {
                ...state,
                entriesList: (action.data.departmentId ? state.entriesBackupList.filter(entry => entry.departmentId == parseInt(action.data.department)) : state.entriesBackupList),
                departmentsCount: fecthDepartmentsCounts(action.data.department ? state.entriesBackupList.filter(entry => entry.departmentId == parseInt(action.data.department)) : state.entriesBackupList),

            }
        default:
            return state;
    }
}

const fecthDepartmentsCounts = (entries) => {
    var departments = entries.map(entry => {
        return (entry.departmentId)
    });
    const initialValue = {}
    const reducer = function (item, visit) {
        if (!item[visit]) {
            item[visit] = 1;
        } else {
            item[visit] = item[visit] + 1;
        }
        return item;
    }
    let result = departments.reduce(reducer, initialValue);
    result = JSON.stringify(result).substring(1, JSON.stringify(result).length - 1).split(',');
    const counts = [];
    for (let index in result) {    // don't actually do this
        counts.push({ departmentId: result[index].split(':')[0].replace(new RegExp('"', 'g'), ''), visits: result[index].split(':')[1] });
    }
    return counts;

}
