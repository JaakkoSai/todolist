import React from "react";
function TodoTable(props) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Actions</th>
          </tr>
          {props.todos.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.description}</td>
              <td>{item.priority}</td>
              <td>
                <button onClick={() => props.deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoTable;
