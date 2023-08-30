import {
  Button,
  Typography,
  TextField,
  MenuItem,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { v4 as uuid } from "uuid";
import { Filter } from "@mui/icons-material";
const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
    },
  },
};
function Practice() {
  const [machines, setMachines] = useState([]);
  // const unique_id = uuid();
  // const small_id = unique_id.slice(0, 8);
  // console.log(small_id, unique_id, "small_id");
  // machineName:"",
  // time:"",
  // id:""

  // const [input, setIntput] = useState(false);

  const addMacineType = () => {
    let macine = {
      machineName: "",
      time: "",
      id: uuid().slice(0, 8),
    };

    let updatedMacineList = [...machines, macine];
    // setIntput(true);
    setMachines(updatedMacineList);
    // const newmachines = macines.push({
    //   machineName: "",
    //   time: "",
    //   id: small_id,
    // });
    // console.log(newmachines, "newmachines");
  };
  // const newmachines = macine.push()
  const resetMachineTypes = () => {
    // setIntput(false);
    setMachines([]);
  };
  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === "string" ? value.split(",") : value
  //   );
  // };
  const deleteIndividualMachine = (id) => {
    let deleteIndividualmachine = [...machines].filter(
      (machine) => machine.id !== id
    );
    console.log(deleteIndividualmachine, "deleteIndividualmachine");
    setMachines(deleteIndividualmachine);
  };
  const onEditMachineValues = (val, type, id) => {
    let tempMachines = [...machines];
    let editIndividualMachineIndex = [...machines].findIndex(
      (machine) => machine.id === id
    );
    let machine = tempMachines[editIndividualMachineIndex];
    console.log(machine, "nmmmm");
    console.log(val, type, id, "mmmmmmm", editIndividualMachineIndex);
    if (type === "m") {
      machine.machineName = val;
    } else {
      machine.time = val;
    }
    tempMachines[editIndividualMachineIndex] = machine;
    setMachines(tempMachines);
  };
  return (
    <div
      style={{
        // border: "1px solid black",
        width: "70%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <span>
          <Typography>
            <h4>Tagged Machine</h4>
            <h5>(machine which help for this process)</h5>
          </Typography>
        </span>
        <span style={{ marginTop: "5px" }}>
          <Button onClick={addMacineType} variant="outlined">
            ADD
          </Button>
        </span>
      </div>
      {machines.map((machine) => (
        <div>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <span>
              <Typography style={{ marginRight: "177px" }}>
                Select Machine
              </Typography>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                style={{ width: "300px" }}
                value={machine.machineName}
                // onChange={handleChange}
                onChange={(e) => {
                  onEditMachineValues(e.target.value, "m", machine.id);
                }}
                input={<OutlinedInput label="Select machine" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </span>
            <span>
              <Typography style={{ marginRight: "212px" }}>
                Time(Minutes)
              </Typography>
              <TextField
                id="outlined-basic"
                onChange={(e) => {
                  onEditMachineValues(e.target.value, "t", machine.id);
                }}
                value={machine.time}
                variant="outlined"
              />
              <span
                onClick={() => deleteIndividualMachine(machine.id)}
                style={{ marginLeft: "50px", color: "red", fontSize: "20px" }}
              >
                <IconButton aria-label="delete">
                  <CloseIcon />
                </IconButton>
              </span>
            </span>
          </div>
        </div>
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginLeft: "100px",
        }}
      >
        <span>
          <Button onClick={resetMachineTypes}>
            <h5 style={{ color: "blue", textDecoration: "underline" }}>
              Reset all taged machines?
            </h5>
          </Button>
        </span>
        <span></span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "100px",
        }}
      >
        <span></span>
        <span style={{ display: "flex", gap: "20px" }}>
          <Button>Cancel</Button>
          <Button variant="contained">Done</Button>
        </span>
      </div>
    </div>
  );
}

export default Practice;
