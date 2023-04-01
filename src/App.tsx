import { Suspense, useState } from 'react';
import Header from './Header/Header.tsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
const Main = React.lazy(() => import('./Main/Main.tsx'));
const OnePhone = React.lazy(() => import('./OnePhone/OnePhone.tsx'));
const Versus = React.lazy(() => import('./Versus/Versus.tsx'));
const CheckOut = React.lazy(() => import('./Checkout/CheckOut.tsx'));
const Modal = React.lazy(() => import('./Modal/Modal.tsx'));
const App = React.memo(function App() {
  const [modal, Setmodal] = useState<boolean>(false);
  const phones = useSelector((state) => state.shop.filter_phone);
  return (
    <>
      {console.log('render app')}
      <Header Setmodal={Setmodal} />
      <Modal modal={modal} Setmodal={Setmodal} />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading Main page...</div>}>
              <Main />
            </Suspense>
          }
        />
        <Route
          path="/:id"
          element={
            <Suspense fallback={<div>Loading OnePhone page...</div>}>
              <OnePhone phones={phones} />
            </Suspense>
          }
        />
        <Route
          path="/versus"
          element={
            <Suspense fallback={<div>Loading Versus page...</div>}>
              <Versus />
            </Suspense>
          }
        />
        <Route
          path="/checkout"
          element={
            <Suspense fallback={<div>Loading Checkout page...</div>}>
              <CheckOut />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
});
export default App;
