import React, { useState } from "react";

export default function Todo() {
  const [username, setusername] = useState("Mike");
  const [todoitems, settodoitems] = useState([
    { action: "Buy Toy", done: false },
    { action: "Meeting @5Pm", done: false },
    { action: "Book Ticket", done: true },
    { action: "Buy Flowers", done: false },
    { action: "Buy Cloths", done: false },
  ]);

  const [newTodo, setnewTodo] = useState("");
  const [showComplete, setshowComplete] = useState(true);

  function toggleTodo(todo) {
    settodoitems(
      todoitems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      )
    );
  }

  function todoTableRows(doneValue) {
    return todoitems
      .filter((t) => t.done === doneValue)
      .map((item, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.action}</td>
          <td>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleTodo(item)}
            />
          </td>
        </tr>
      ));
  }

  function createNewTodo() {
    const foundItem = todoitems.find((item) => item.action === newTodo);
    if (!foundItem) {
      settodoitems([...todoitems, { action: newTodo, done: false }]);
    }
    setnewTodo("");
  }
  return (
    <div>
      <h2 className="bg-primary text-center p-3 text-light">
        {username}'s Todo List ({todoitems.filter((t) => !t.done).length})
        {"items to do "}
      </h2>

      {/* Create Todo */}
      <div className="row">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control"
            value={newTodo}
            onChange={(e) => setnewTodo(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <button className="btn btn-primary" onClick={createNewTodo}>
            Add New Todo
          </button>
        </div>
      </div>
      <br />
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Todo Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>{todoTableRows(false)}</tbody>
        </table>
      </div>

      <input
        type="checkbox"
        checked={showComplete}
        onChange={(e) => setshowComplete(e.target.checked)}
      />
      <span className="mx-2">Show Complleted Todo's</span>

      {showComplete && (
        <div className="row">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Todo Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{todoTableRows(true)}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}
