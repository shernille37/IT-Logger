import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
} from '../actions/types';

const initialState = {
  techs: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TECHS: {
      return {
        ...state,
        techs: action.payload,
      };
    }

    case DELETE_TECH: {
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
