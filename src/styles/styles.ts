// styles.ts
import styled from "styled-components";

export const MobileOnly = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopOnly = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
