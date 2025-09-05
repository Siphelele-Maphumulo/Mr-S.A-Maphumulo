import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects(state, action) {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;

export const fetchProjects = () => async (dispatch) => {
  const response = await fetch('https://SipheleleMaphumulo.github.io/MyPortfolio/portfolio.json');
  const data = await response.json();
  dispatch(setProjects(data));
};
