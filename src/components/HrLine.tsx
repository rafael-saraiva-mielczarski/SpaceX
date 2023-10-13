import styled from "styled-components/native";

export default function HrLine() {
  return <StyledHrLine />;
}

const StyledHrLine = styled.View`
  border: 1px solid ${({ theme }) => theme.colors.black};
  width: 100%;
`;
