import styled from 'styled-components';

const StyledDropDown = styled.div`
  & .ant-dropdown-link {
    display: flex;
    width: 150px;
    margin-bottom: 0;
    cursor: pointer;
    border: 2px solid black;
    border-radius: 2px;
    padding: 3px 10px;
    margin-right: 20px;

    & .anticon.anticon-down {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: auto;
    }
  }  
`

export default StyledDropDown;