import "../styles/globals.css"
import React from "react"
import { Provider } from "react-redux"

//import createStore from "../store"

import { createStore, applyMiddleware } from "redux"
import reducers from "../reducers"

import ReduxThunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"
import sagas from "../saga"
//const store = createStore(reducers) // reducers 를 바탕으로 store 생성

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(ReduxThunk, sagaMiddleware))
// const store = createStore(reducers, applyMiddleware(ReduxThunk))

sagaMiddleware.run(sagas)

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />createSagaMiddleware
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
