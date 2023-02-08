import styled from '@emotion/styled';

const ContactsList = styled.ul``;
const ContactItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 20px;
  width: 370px;
`;
const Button = styled.button`
  width: 80px;
  height: 28px;
`;
const ContactName = styled.p`
  display: flex;
  gap: 5px;
  justify-content: space-around;
  width: 275px;
  text-align: center;
  font-size: 20px;
`;
const LabelItem = styled.span`
  display: flex;
  margin-left: 30px;
  gap: 100px;
`;
export { ContactsList, ContactItem, ContactName, Button, LabelItem };
