import { LinkForMenu, LinkWithoutBackground, MenuCenter, MenuNav, MenuRight } from "../styles/BannerStyle";

export default function MenuBar() {
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
          <LinkForMenu to="/join" >
            Register
          </LinkForMenu>
          <LinkForMenu to="/login">
            Sign in
          </LinkForMenu>
          </MenuRight>
        </MenuNav>
    </>
  )
}