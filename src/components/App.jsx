import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import Layout from './Layout';
import authOperations from '../redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelectors from '../redux/auth/auth-selector';

const HomeView = lazy(() => import('../views/HomeView/HomeView'));
const PhonebookView = lazy(() =>
  import('../views/PhonebookView/PhonebookView')
);
const SignUpView = lazy(() => import('../views/SignUpView/SignUpView'));
const LogInView = lazy(() => import('../views/LogInView/LogInView'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingUser);

  return (
    <>
      <Routes>
        {!isFetchingCurrentUser && (
          <Route exact path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <HomeView />
                </PublicRoute>
              }
            />

            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <PhonebookView />
                </PrivateRoute>
              }
            />

            <Route
              path="/signup"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <SignUpView />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute redirectTo="/contacts" restricted>
                  <LogInView />
                </PublicRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
      </Routes>
    </>
  );
};
