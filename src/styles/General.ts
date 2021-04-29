import styled from 'styled-components';
import { breakpoint } from "./BreakPoint";

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100px;
  ${breakpoint.md`
    flex-direction: row;
    justify-content: center;
  `}
`;

export const SelectContainer = styled.div`
  width: 100%;
  color: black;
  padding-top: 15px;
  ${breakpoint.md`
    width: 50%;
    padding: 20px;
    max-width: 400px;
  `}
`;
