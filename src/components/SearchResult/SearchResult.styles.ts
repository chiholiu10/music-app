import styled from 'styled-components';
import { breakpoint } from "../../styles/BreakPoint";

export const Container = styled.div`
  padding-top: 30px;
`;

export const InnerContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.grey};
  ${breakpoint.sm`
    border-radius: 5px;
    max-width: 500px;
    flex-direction: row;
    height: 140px;
    margin-left: auto;
    margin-right: auto;
  `}
`;

export const Title = styled.p`
  line-height: 1.7;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  ${breakpoint.sm`
    width: 60%;
    line-height: 1;
    padding-bottom: 8px;
    font-size: 20px;
  `}
`;

export const ReleaseYear = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  ${breakpoint.sm`
    width: 60%;
  `}
`;

export const Column = styled.div`
  &:last-child {
    display: flex;          
    flex-direction: column;  
    justify-content: center;    
    padding: 12px 20px 18px;
  }
  ${breakpoint.sm`
    flex: 0 50%;
    &:last-child {
      align-items: center; 
      padding: 0;
    }
  `}
`;