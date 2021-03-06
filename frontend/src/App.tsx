import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Listing from 'pages/listing';
import Form from 'pages/form';
import NavBar from 'components/navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;