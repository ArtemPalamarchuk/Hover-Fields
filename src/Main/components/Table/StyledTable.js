import styled from 'styled-components';


const StyledTable = styled.table`
    margin-top: 20px;
    color: white;
    border: 1px solid black;
    border-collapse: collapse;
    & tr{
      cursor: pointer;
    }
    & td, tr{
      background: white;
      padding: 25px;
      border: 1px solid black;
    }
    & td:hover{
      background: #03A8F4;
    }
`

export default StyledTable
