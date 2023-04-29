import { BrowserRouter, Routes, Route } from "react-router-dom";
import PuzzlePage from "../../pages/PuzzlePage/PuzzlePage";
import Landing from "../../pages/Landing/Landing";
import Confirmation from "../../pages/Confirmation/Confirmation";
import Champions from "../../pages/Champions/Champions";
import PersonalTournaments from "../../pages/PersonalTournaments/PersonalTournaments";
import LogIn from "../../pages/LogIn/LogIn";
import Register from "../../pages/Register/Register";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
        <Route
          path="/success"
          element={
            <Confirmation answer="That's right! If two people manage to grab their own umbrellas, the third person is left with only one umbrella to take: her own! It's impossible for only two of the three to pick up their own umbrellas." />
          }
        />
        <Route path="/halloffame" element={<Champions />} />
        <Route path="/personal-tournaments" element={<PersonalTournaments />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
