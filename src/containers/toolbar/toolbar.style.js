import styled from "styled-components";

export const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 48px;
  padding: 5px 7px;
  margin-bottom: 8px;
  border-radius: 2px 2px 0 0;
  box-shadow: 0px 0px 3px 1px rgba(15, 15, 15, 0.17);
`;

export const ToolbarItem = styled.div`
  width: 28px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  box-shadow: 0px 1px 11px 1px rgba(15, 15, 15, 0.2);
  background-color: #34495e;
  color: #fff;
  font-size: 16px;
  font-family: Oxygen, sans-serif;
  transition: all 250ms ease-in-out;
  cursor: pointer;
  border: 1px solid #34495e;
  ${props => props.isActive && `  
    color: #34495e;
    background-color: transparent;
    box-shadow: none;
    `}
  &:hover {
    color: #34495e;
    background-color: transparent;
    box-shadow: none;
  }
`;

export const Container = styled.div`
  display: flex;
  margin-right: 7px;
`;