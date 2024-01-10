import { HelmetProvider } from 'react-helmet-async';
import MainPage from '../../pages/MainPage/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import FilmPage from '../../pages/FilmPage/FilmPage';
import AddReviewPage from '../../pages/AddReviewPage/AddReviewPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import MyListPage from '../../pages/MyListPage/MyListPage';
import PlayerPage from '../../pages/PlayerPage/PlayerPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

type AppProps = {
  FilmInfo: {
    name: string;
    genre: string;
    date: number;
  };
}

// function App(props: AppProps): JSX.Element {
//   return (
//     <MainPage name={props.FilmInfo.name} date={props.FilmInfo.date} genre={props.FilmInfo.genre} />
//   );
// }

function App(props: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainPage name={props.FilmInfo.name} date={props.FilmInfo.date} genre={props.FilmInfo.genre} />} />
          <Route path={AppRoute.SignIn} element={<SignInPage />} />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
                <MyListPage />
              </PrivateRoute>
            }
          />
          <Route path={AppRoute.Film} element={<FilmPage />} />
          <Route path={AppRoute.Player} element={<PlayerPage />} />
          <Route path={AppRoute.AddReview} element={<AddReviewPage />} />
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
