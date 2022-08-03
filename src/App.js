import "./App.css";
import Navbar from "./components/Navbar";
import Women from "./components/Women";
import Men from "./components/Men";
import Kids from "./components/Kids";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

let client = new ApolloClient({
  uri: process.env.REACT_APP_BACKEND_URL,
  cache: new InMemoryCache(),
});

// console.log('client++++++++++++++++++', client)

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Navbar />
        <Routes>
          <Route path="women" element={<Women />}></Route>
          <Route path="men" element={<Men />}></Route>
          <Route path="kids" element={<Kids />}></Route>
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
