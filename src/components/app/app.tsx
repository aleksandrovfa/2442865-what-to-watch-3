import MainPage from '../../pages/MainPage/MainPage';

type AppProps = {
  FilmInfo: {
    name: string;
    genre: string;
    date: number;
  };
}

function App(props: AppProps): JSX.Element {
  return (
    <MainPage name={props.FilmInfo.name} date={props.FilmInfo.date} genre={props.FilmInfo.genre} />
  );
}

export default App;
