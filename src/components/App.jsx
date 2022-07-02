import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import Layout from './Layout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelectors from '../redux/auth/auth-selector';
import authOperations from '../redux/auth/auth-operations';

const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const PhonebookView = lazy(() =>
  import('../views/PhonebookView/PhonebookView')
);
const SignUpView = lazy(() => import('../views/SignUpView/SignUpView'));
const LogInView = lazy(() => import('../views/LogInView/LogInView'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getIsFetchingUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!isFetchingUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomeView />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <SignUpView />
                </PublicRoute>
              }
            />

            <Route
              path="login"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <LogInView />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <PhonebookView />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
