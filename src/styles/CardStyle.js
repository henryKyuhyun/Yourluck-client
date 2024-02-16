import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 10px;
  border-radius: 10px;
  margin-top: 100px;
  margin-left: 100px;
  box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
  text-align: center;
  font-size: 1.5rem;
  width: 200px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.bgColor || '#f8f8f8'};

  p {
    color: ${props => props.pColor || 'black'};
  }
`;

export const HereText = styled.div`
  font-size: 2rem;
`;
