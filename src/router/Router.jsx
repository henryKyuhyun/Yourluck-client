import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserJoin from "../User/UserJoin";
import UserLogin from "../User/UserLogin";
import MainPage from "../pages/MainPage";
import TodayLuck from "../Luck/TodayLuck";
import LottoNumber from "../Luck/LottoNumber";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<MainPage /> }/>
        <Route path="/join" element={<UserJoin />}/>
        <Route path="/login" element={<UserLogin />}/>
        <Route path="/todayLuck" element={<TodayLuck />} />
        <Route path="/lottonumbers" element={<LottoNumber />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;