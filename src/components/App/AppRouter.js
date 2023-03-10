import { BrowserRouter, Routes, Route } from "react-router-dom";
import PuzzlePage from "../../pages/PuzzlePage/PuzzlePage";
import Landing from "../../pages/Landing/Landing";
import Confirmation from "../../pages/Confirmation/Confirmation";
import Champions from "../../pages/Champions/Champions";
import PersonalTournaments from "../../pages/PersonalTournaments/PersonalTournaments";
import LogIn  from "../../pages/LogIn/LogIn";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/puzzle" element={<PuzzlePage />} />
        <Route
          path="/success"
          element={
            <Confirmation answer="The winner needs at least 20 votes. Since each of the candidates dislikes the other two, they will probably all vote for themselves. 40 votes minus those three votes leaves 37 votes. The winner will need over half the votes, or 19. Add the winning candidate's personal vote to that and you get 20 votes. Even if another candidate gathered all the remaining 18 votes, that wouldn't be enough to overcome the candidate with 20 votes." />
          }
        />
        <Route path="/halloffame" element={<Champions />} />
        <Route path="/personal-tournaments" element={<PersonalTournaments />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
