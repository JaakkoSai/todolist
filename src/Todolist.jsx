import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { useRef } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function Todolist() {
  const [todo, setTodo] = useState({ description: "", date: "", priority: "" });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleDateChange = (date) => {
    setTodo((prevTodo) => ({
      ...prevTodo,
      date: date.format("YYYY-MM-DD"),
    }));
  };

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  };
  const deleteTodo = () => {
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(
        todos.filter(
          (todo, index) => index !== gridRef.current.getSelectedNodes()[0].id
        )
      );
    } else {
      alert("Select row first");
    }
  };

  const columns = [
    {
      field: "description",
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
    { field: "date", sortable: true, filter: true, floatingFilter: true },
    {
      field: "priority",
      sortable: true,
      filter: true,
      floatingFilter: true,
      cellStyle: (params) =>
        params.value === "High" ? { color: "red" } : { color: "black" },
    },
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <DatePicker
          label="Date"
          variant="standard"
          name="date"
          value={todo.date}
          onChange={(date) => handleDateChange(date)}
        />

        <TextField
          label="Description"
          variant="standard"
          name="description"
          value={todo.description}
          onChange={inputChanged}
        />

        <TextField
          label="Priority"
          variant="standard"
          onChange={inputChanged}
          name="priority"
          value={todo.priority}
        />
        <Button onClick={addTodo} variant="contained">
          Add
        </Button>
        <Button onClick={deleteTodo} variant="contained">
          Delete
        </Button>
        <div
          className="ag-theme-material"
          style={{ height: "700px", width: "70%", margin: "auto" }}
        >
          <AgGridReact
            ref={gridRef}
            onGridReady={(params) => (gridRef.current = params.api)}
            rowSelection="single"
            columnDefs={columns}
            rowData={todos}
            domLayout="autoHeight"
            animateRows={true}
          ></AgGridReact>
        </div>
      </Stack>
    </LocalizationProvider>
  );
}

export default Todolist;
