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

const createMeeting = (dispatch, actions, meetings, meetInfo, userEmail) => {
  const isDuplicate = (meetings[userEmail] || []).some(
    (meeting) => meeting.admin === meetInfo.admin && meeting.date === meetInfo.date
  );

  if (!isDuplicate) {
    dispatch({
      type: actions.addMeeting,
      payload: { userEmail, meetInfo: { ...meetInfo, id: new Date().getTime() } },
    });
  }
};

const initializeStateFromLocalStorage = () => {
  const storedMeetings = JSON.parse(localStorage.getItem('meetings')) || {};
  const storedUser = JSON.parse(localStorage.getItem('user')) || null;

  return {
    meetings: storedMeetings,
    participants: [],
    user: storedUser,
  };
};


const store = createStore(
  combineReducers({
    meetings: meetingsReducer,
    participants: participantsReducer,
    user: userReducer,
  }),
  initializeStateFromLocalStorage()
);

store.subscribe(() => {
  const { meetings, user } = store.getState();
  localStorage.setItem('meetings', JSON.stringify(meetings));
  localStorage.setItem('user', JSON.stringify(user));
});

export { store, actions, createMeeting };
