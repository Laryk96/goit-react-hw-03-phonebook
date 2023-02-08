import { Form as Forma, Field } from 'formik';
import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const Form = styled(Forma)`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
  & span {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const Input = styled(Field)`
  height: 25px;
  width: 220px;
  padding-left: 10px;

  border: none;
  border-radius: 5px;
  outline: yellow;
`;

const Button = styled.button`
  margin: 0 auto;
  font-size: 16px;
  width: 150px;
  height: 30px;

  cursor: pointer;
`;
export { Label, Form, Input, Button };
