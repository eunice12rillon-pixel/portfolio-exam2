import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#b32a20] via-[#000000] to-[#b32a20]">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
