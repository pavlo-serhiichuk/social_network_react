
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 21,
    currentPage: 2,
    isFatching: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users:  state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true } // возвращаем только копию.
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users:  state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false } // возвращаем только копию.
                    }
                    return u
                })
            }
        }
        case SET_USERS:
            return {...state, users: action.users }
            case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
            case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.count}
            case TOGGLE_IS_FETCHING:
            return {...state, isFatching: action.isFatching}
        default:
            return state
    }
}

export const follow = (userId) => ( {type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, count: totalCount})
export const toggleIsFatching = (isFatching) => ({type: TOGGLE_IS_FETCHING, isFatching})

export default usersReducer