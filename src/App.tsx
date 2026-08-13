import { Route, Routes } from "react-router-dom";
import SiteShell from "./components/SiteShell";
import RouteMetadata from "./components/RouteMetadata";
import HomePage from "./pages/HomePage";
import MeridianPage from "./pages/MeridianPage";
import ResumePage from "./pages/ResumePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <>
      <RouteMetadata />
      <Routes>
        <Route element={<SiteShell />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/meridian" element={<MeridianPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
