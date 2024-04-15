const redux = require('redux');
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const ACTION_TYPE = {
  add : 'ADD_SUBSCRIBER',
  addview : 'ADD_VIEWCOUNT'
}
// actions ~~한 행동
const addSubscriber = () =>{
  return {
    type : ACTION_TYPE.add
  }
}
const addViewCount = () =>{
  return {
    type : ACTION_TYPE.addview
  }
}

// reducers
const subscriberNumber = {
  number : 365
}
const subscriberReducer = (state = subscriberNumber, action) =>{
  switch(action.type) {
    case ACTION_TYPE.add :
      return {
        ...state,
        number : state.number+1
      }
    default : return state
  }
}
const viewState = {
  viewCount : 100
}
const viewReducer = (state = viewState, action) =>{
  switch(action.type) {
    case ACTION_TYPE.addview :
      return {
        ...state,
        viewCount : state.viewCount + 2
      }
    default : return state
  }
}
const rootReducer = combineReducers({
  view : viewReducer,
  subscriber : subscriberReducer
})


// store
const store = createStore(rootReducer, applyMiddleware(logger));

store.dispatch(addSubscriber())
store.dispatch(addSubscriber())
store.dispatch(addSubscriber())
store.dispatch(addViewCount())
store.dispatch(addViewCount())
