import { createStore, combineReducers } from 'redux';

const actions = {
  register: 'REGISTER',
  login: 'LOGIN',
  logout: 'LOGOUT', 
  addMeeting: 'ADD_MEETING',
  updateMeeting: 'UPDATE_MEETING',
  deleteMeeting: 'DELETE_MEETING',
};

const meetingsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.addMeeting:
      return [...state, action.payload];

    case actions.updateMeeting:
      return state.map((meeting) =>
        meeting.id === action.payload.id ? { ...meeting, ...action.payload } : meeting
      );

    case actions.deleteMeeting:
      return state.filter((meeting) => meeting.id !== action.payload);

    default:
      return state;
  }
};

const participantsReducer = (state = [], action) => {
  switch (action.type) {
    case actions.addParticipant:
      return [...state, action.payload];

    case actions.updateParticipant:
      return state.map((participant) =>
        participant.id === action.payload.id ? { ...participant, ...action.payload } : participant
      );

    case actions.deleteParticipant:
      return state.filter((participant) => participant.id !== action.payload);

    default:
      return state;
  }
};

const userReducer = (state = null, action) => {
  switch (action.type) {
    case actions.register:
    case actions.login:
      return action.payload;

    case actions.logout: 
      return null;

    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    meetings: meetingsReducer,
    participants: participantsReducer,
    user: userReducer,
  })
);

export { store, actions };
