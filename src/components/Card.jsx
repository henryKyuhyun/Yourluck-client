import { useEffect, useState } from "react";
import { CardContainer, HereText } from "../styles/CardStyle";

const cards = [
  'Check Your Luck for today',
  'Check Lottery number',
  'Check your luck history'
]

const cardBgColors = ['#FFADAD', '#FFD6A5', '#FDFFB6'];
const cardTextColors = ['#F21f', '#333333', '#666666'];


export default function Card() {
  const [ currentIndex, setCurrentIndex ] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % cards.length);
    }, 1000);

    // 컴포넌트가 언마운트되거나 업뎃되기전 Interval 정리
    return () => {
      clearInterval(intervalId);
    };
  },[currentIndex]);

  return (
    <CardContainer bgColor={cardBgColors[currentIndex]} pColor={cardTextColors[currentIndex]}>
  <HereText>Here I am</HereText>
      <div><p>{cards[currentIndex]}</p></div>
    </CardContainer>
  )
}