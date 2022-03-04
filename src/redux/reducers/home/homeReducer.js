import * as types from "../../actions/home/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_HOMES_START:
    case types.ADD_HOME_START:
    case types.DELETE_HOME_START:
    case types.UPDATE_HOME_START:
    case types.LOAD_HOME_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_HOMES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_HOME_SUCCESS:
      return{
        ...state,
        loading: false,
        home: action.payload
      }
    case types.ADD_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {...state.data, items: [action.payload, ...state.data.items]}
      }
    case types.UPDATE_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {...state.data, items: state.data.items.map((item) => {
          if (item.id !== action.payload.id) return item;
          return action.payload
        })}
      };
    case types.DELETE_HOME_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.LOAD_HOME_ERROR:
    case types.LOAD_HOMES_ERROR:
    case types.ADD_HOME_ERROR:
    case types.UPDATE_HOME_ERROR:
    case types.DELETE_HOME_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default homeReducer;
