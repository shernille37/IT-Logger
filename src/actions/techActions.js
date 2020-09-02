import { GET_TECHS, ADD_TECH, DELETE_TECH, TECHS_ERROR } from './types';

// Get Techs from server

export const getTechs = () => async (dispatch) => {
  try {
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data });
  }
};

// Add Tech to Server

export const addTech = (tech) => async (dispatch) => {
  try {
    await fetch('/techs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tech),
    });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data });
  }
};

// Delete Tech from Server

export const deleteTech = (id) => async (dispatch) => {
  try {
    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({ type: TECHS_ERROR, payload: err.response.data });
  }
};
