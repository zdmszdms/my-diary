import styled from "@emotion/styled";

export const BotBar = styled.footer`
  display: flex;
  width: 100%;
  height: 80px;
  padding: 0px 16px 0px 4px;
  align-items: center;
  gap: 276px;
  flex-shrink: 0;
  justify-content: space-between;
  background: #fef7ff;

  h2 {
    font-weight: 400;
  }

  button {
    display: flex;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 10px;

    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .btplus {
    border-radius: 10px;
    background: var(--m-3-sys-light-secondary-container, #e8def8);
    /* M3/Elevation Light/3 */
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3),
      0px 4px 8px 3px rgba(0, 0, 0, 0.15);
  }
`;
