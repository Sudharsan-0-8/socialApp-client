import { ApolloProvider } from '@apollo/client';
import { Routes, Route } from 'react-router-dom';

import client from './components/config.js';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Post from './components/Post.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'login'} element={<Login />} />
          <Route path={'register'} element={<Register />} />
          <Route path={'post/:id'} element={ <Post />} />
        </Routes>
      </div>
    </ApolloProvider>
  )
}

export default App;
