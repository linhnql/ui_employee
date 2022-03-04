import * as types from "../../actions/customer/actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_CUSTOMERS_START:
    case types.ADD_CUSTOMER_START:
    case types.DELETE_CUSTOMER_START:
    case types.UPDATE_CUSTOMER_START:
    case types.LOAD_CUSTOMER_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case types.LOAD_CUSTOMER_SUCCESS:
      return{
        ...state,
        loading: false,
        customer: action.payload
      }
    case types.ADD_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {...state.data, items: [action.payload, ...state.data.items]}
      }
    case types.UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {...state.data, items: state.data.items.map((item) => {
          if (item.id !== action.payload.id) return item;
          return action.payload
        })}
      };
    case types.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.LOAD_CUSTOMER_ERROR:
    case types.LOAD_CUSTOMERS_ERROR:
    case types.ADD_CUSTOMER_ERROR:
    case types.UPDATE_CUSTOMER_ERROR:
    case types.DELETE_CUSTOMER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default customerReducer;
