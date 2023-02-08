import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;

  & span {
    margin-bottom: 5px;
  }
`;
const Input = styled.input`
  width: 300px;
  height: 30px;
  padding-left: 10px;
`;

export { Label, Input };
