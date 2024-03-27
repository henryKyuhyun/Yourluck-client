import UserLogout from "../User/UserLogout";
import { LinkForMenu, LinkWithoutBackground, MenuCenter, MenuNav, MenuRight } from "../styles/BannerStyle";
import { useSelector } from "react-redux";

export default function MenuBar() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  return(
    <>
      <MenuNav>
      <MenuCenter>
        <LinkWithoutBackground to="#">
          Check Your Luck
        </LinkWithoutBackground>
        
        <LinkWithoutBackground to="#">
          Lottery number
        </LinkWithoutBackground>
        
        <LinkWithoutBackground to="#">
          Board
        </LinkWithoutBackground>
        </MenuCenter>

        <MenuRight>
        {isAuthenticated ? (
          <>
          <p>{user.username}님 반갑습니다!</p>
          <UserLogout />
          </>

        ) : (
          <>
            <LinkForMenu to="/join">
              Register
            </LinkForMenu>
            <LinkForMenu to="/login">
              Sign in
            </LinkForMenu>
          </>
        )}
        </MenuRight>
        </MenuNav>
    </>
  )
}