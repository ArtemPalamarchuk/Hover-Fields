import React from 'react';
import { randomId } from '../../helpers/randomId'
import StyledTable from './StyledTable'

const Table = ({scheme, setHistory}) => {

  return (
    <StyledTable id={'table'}>
      <tbody>
      {scheme.map((arr, index) =>
        <tr key={`tRow${index}`}>{arr.map((el) =>
          <td
            key={randomId()}
            onMouseEnter={() => setHistory(`row: ${el.y} col: ${el.x}`)}
          >
          </td>)}
        </tr>)}
      </tbody>
    </StyledTable>
  )
}
export default Table;