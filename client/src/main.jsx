// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
 import store from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const persistor = persistStore(store)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <App />
          <ToastContainer
    position="top-right"
    autoClose={2500}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick={true}
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
     />
      </PersistGate>
    </Provider>
  </StrictMode>,
)

