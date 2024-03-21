import { BannerSection, HeaderP, TitleText } from "../styles/BannerStyle";
import MenuBar from "./MenuBar";
import Card from "./Card";
import yourLuckLogo from "../assets/yourlucklogo.png"



export default function Banner() {
  return(
    <BannerSection>
      <MenuBar/>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <TitleText>your luck</TitleText>
            <Card />
          </div>
          <HeaderP>check your luck today before leave your home <br/>we wish you have luck all your life</HeaderP>
        </div>
        <img className="logo" src={yourLuckLogo} alt="logo" style={{marginRight: '300px', alignSelf: 'center'}} />
      </div>
    </BannerSection>
  )
} 