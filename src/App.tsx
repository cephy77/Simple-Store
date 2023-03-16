import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Page from "./pages/Page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Page />} />
        <Route path="/error" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
