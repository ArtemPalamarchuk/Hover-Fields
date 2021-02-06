import styled from 'styled-components';

const StyledHistory = styled.div`
  margin-left: 50px;

  & .label {
    font-weight: bold;
    margin-bottom: 20px;
  }

  & .history {
    max-height: 400px;
    overflow-y: scroll;
    & .message-wrap {
      width: 150px;
      background: #FBF8E3;
      border: 2px solid #FCF3E2;
      border-radius: 2px;
      padding: 5px 15px;
      margin-bottom: 10px;

      & .message {
        margin: 0;
      }
    }
  }
`

export default StyledHistory;