import { Route, Routes } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={HomePage} />
        <Route path="*" element={ErrorPage} />
      </Routes>
    </AppWrapper>
  );
}
export default App;
