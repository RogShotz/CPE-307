import React from 'react'

function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
    </table>
  );
}


function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>{row.id}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  }
  );
  return (
    <tbody>
      {rows}
    </tbody>
  );
}

function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>ID</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
}

export default Table;