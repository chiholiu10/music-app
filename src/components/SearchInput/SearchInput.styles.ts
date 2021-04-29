import styled from 'styled-components';

export const SearchBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  border-radius: 28px;
  width: 300px;
  height: 45px;
  padding: 0 15px;
  &:focus {
    outline: none;
  }
`;