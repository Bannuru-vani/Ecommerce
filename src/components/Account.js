import {
  Typography,
  Button,
  Drawer,
  MenuItem,
  Select,
  OutlinedInput,
  TextField,
  Chip,
  Divider,
  Modal,
  Menu,
  Box,
} from "@mui/material";
import React, { useState, useRef, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { LoadScript, GoogleMap, Polygon } from "@react-google-maps/api";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";
import "./account.css";
function Account() {
  const [open, setOpen] = useState(false);
  const [machine, setMachines] = useState([]);
  const [selectProcessType, setSelectProcessType] = useState("");
  const [selectTime, setSelectTime] = useState("");
  const [processData, setProcessData] = useState([]);
  const [rawChipType, setRawChipType] = useState([]);
  const [idealMachineValue, setIdealMachineValue] = useState("");
  const [selectdProcessOrderForEdit, setSelectdProcessOrderForEdit] = useState(
    {}
  );

  useEffect(() => {
    if (Object.keys(selectdProcessOrderForEdit).length > 0) {
      let {
        processtype,

        time,
        rawmaterials,
        iidealMachine,
        allMachineTypes,
      } = selectdProcessOrderForEdit;
      setMachines(allMachineTypes);
      setSelectProcessType(processtype);
      setIdealMachineValue(iidealMachine);
      setSelectTime(time);
      setRawChipType(rawmaterials);
    }
  }, [selectdProcessOrderForEdit]);

  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleCloseMenuItem = () => {
    setAnchorEl(null);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const openMenu = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const [chipData, setChipData] = useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);
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

  const addSelectMachineTypes = () => {
    let machinearray = {
      machineName: "",
      time: "",
      id: uuid().slice(0, 8),
    };
    let addNewSelectedMachinesTypes = [...machine, machinearray];
    setMachines(addNewSelectedMachinesTypes);
  };
  console.log(selectProcessType, "selectProcessType");
  const addAddProcessStepData = (data) => {
    console.log(data, "jjjjjj");
    let procesData = {
      processtype: selectProcessType,
      processid: uuid().slice(0, 8),
      time: selectTime,
      rawmaterials: rawChipType,
      iidealMachine: idealMachineValue,
      allMachineTypes: [...machine],
    };
    let allNewProcessData = [...processData, procesData];
    setProcessData(allNewProcessData);
    setOpen(!open);
    setMachines([]);
    setSelectProcessType("");
    setSelectTime("");

    setRawChipType([]);
    setIdealMachineValue("");
    console.log("jjjj", allNewProcessData);
  };
  const onEditMachineValues = (val, type, id) => {
    let tempMachines = [...machine];
    console.log(tempMachines, "mmmmmmmmmmmmmmmmmmmmm");
    let editIndividualMachineIndex = [...machine].findIndex(
      (machines) => machines.id === id
    );
    let machin = tempMachines[editIndividualMachineIndex];
    console.log(machin, "machin");
    console.log(machin, "nmmmm");
    console.log(val, type, id, "mmmmmmm", editIndividualMachineIndex);
    if (type === "m") {
      machin.machineName = val;
    } else {
      machin.time = val;
    }
    tempMachines[editIndividualMachineIndex] = machin;
    setMachines(tempMachines);
  };
  const onClickEditProcess = (obj) => {
    setSelectdProcessOrderForEdit({ ...obj });
    console.log(Object.keys(obj));
    toggleDrawer();
  };
  const deleteProcessTypeDetails = (processid, data) => {
    console.log(processid, data, "lllllllllllll");
    let deleteProceesstypedetails = [...processData].filter(
      (procesid) => procesid.id === processid
    );
    setProcessData(deleteProceesstypedetails);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //console.log("The path state is", path);
  return (
    <div>
      <div className="App"></div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          border: "1px solid black",
          margin: "auto",
          width: "80%",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <span>
          {" "}
          <Typography>Process Steps (1)</Typography>
          <Typography>(Eg.Drying, grinding etc)</Typography>
        </span>
        <span>
          <Button
            variant="outlined"
            style={{ marginTop: "5px" }}
            onClick={toggleDrawer}
          >
            Add Process Step
          </Button>
        </span>
      </div>
      <Drawer
        //   anchor={anchor}
        open={open}
        onClose={() => toggleDrawer()}
      >
        <div style={{ width: "800px" }}>
          <h5>Add Process Steps</h5>
          <div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span>
                <h6>Select Process</h6>
                <Select
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  style={{ width: "300px" }}
                  input={<OutlinedInput label="Select machine" />}
                  MenuProps={MenuProps}
                  value={selectProcessType}
                  onChange={(e) => setSelectProcessType(e.target.value)}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </span>
              <span>
                <h6>Select Type Time (Minutes)</h6>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={selectTime}
                  onChange={(e) => setSelectTime(e.target.value)}
                />
              </span>
            </div>
            <div style={{ marginLeft: "70px" }}>
              <h6>Select Raw Material</h6>
              <Button></Button>
              {chipData.map((data) => (
                <Button>
                  <Chip
                    label={data.label}
                    value={rawChipType}
                    onChange={(e) => setRawChipType(e.target.value)}
                  />
                </Button>
              ))}
            </div>
            <div style={{ marginLeft: "70px" }}>
              <h6>Ideal Machine Count (Per Process Order)</h6>
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "600px" }}
                placeholder="2"
                value={idealMachineValue}
                onChange={(e) => setIdealMachineValue(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
                marginLeft: "52px",
                width: "670px",
              }}
            >
              <span>
                <h5>Add Machine</h5>
                <h6>(Add machine which help for this process)</h6>
              </span>
              <span>
                <Button
                  variant="outlined"
                  style={{ marginTop: "5px" }}
                  onClick={addSelectMachineTypes}
                >
                  Add
                </Button>
              </span>
            </div>
            {machine.map((data) => (
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <span>
                  <h6>Select Machine Type</h6>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    style={{ width: "300px" }}
                    input={<OutlinedInput label="Select machine" />}
                    MenuProps={MenuProps}
                    value={data.machineName}
                    onChange={(e) => {
                      onEditMachineValues(e.target.value, "m", data.id);
                    }}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </span>
                <span>
                  <h6>Select Type Time (Minutes)</h6>
                  <TextField
                    id="outlined-basic"
                    value={data.time}
                    onChange={(e) => {
                      onEditMachineValues(e.target.value, "t", data.id);
                    }}
                    variant="outlined"
                  />
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginLeft: "400px",
              marginTop: "10px",
            }}
          >
            <span></span>
            <span>
              <Button variant="outlined" onClick={addAddProcessStepData}>
                Done
              </Button>
            </span>
          </div>
        </div>
      </Drawer>
      {processData.map((data) => (
        <div
          style={{
            width: "500px",
            border: "1px solid black",
            margin: "auto",
            marginTop: "20px",
            padding: "10px",
          }}
        >
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <h6>Testing</h6>
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={open ? "long-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
            >
              <MoreVertIcon />
            </IconButton>
            <Menu
              open={openMenu}
              anchorEl={anchorEl}
              onClose={handleCloseMenuItem}
            >
              <MenuItem
                onClick={handleCloseMenuItem}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Button onClick={() => onClickEditProcess(data)}>
                  <EditIcon />
                </Button>
              </MenuItem>
              <MenuItem
                onClick={handleCloseMenuItem}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Button
                  onClick={() => deleteProcessTypeDetails(data.processid)}
                >
                  <DeleteIcon />
                </Button>
              </MenuItem>
            </Menu>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <h6>Time (Minute)</h6>
            <h6>{data.time}</h6>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <h6>Raw Material</h6>
            <h6>{data.processtype}</h6>
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <h6>Machine Count</h6>
            <h6>{data.iidealMachine}</h6>
          </span>
          <Divider type="horizontal" style={{ marginTop: "10px" }} />
          <span>
            <h6>Total Machine (1)</h6>
          </span>
          <span
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            {data.allMachineTypes?.map((name) => (
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  lineHeight: "30px",
                }}
              >
                <h6>{name.machineName}</h6>
                <h6>{name.time}</h6>
              </span>
            ))}

            {data.allMachineTypes.length > 2 ? (
              <Button
                variant="link"
                style={{ textDecoration: "underline" }}
                onClick={handleOpen}
              >
                Seemore
              </Button>
            ) : (
              <h6 style={{ textDecoration: "underline" }}>seemore</h6>
            )}

            <Modal open={openModal} onClose={handleClose}>
              <Box sx={style}>
                {data.allMachineTypes?.map((name) => (
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      lineHeight: "30px",
                    }}
                  >
                    <h6>{name.machineName}</h6>
                    <h6>{name.time}</h6>
                  </span>
                ))}
              </Box>
            </Modal>
          </span>
        </div>
      ))}
      <div class="body genealogy-body genealogy-scroll">
        <div class="genealogy-tree">
          <ul>
            <li>
              <a href="javascript:void(0);">
                <div class="member-view-box">
                  <div class="member-image">
                    <div class="member-details">
                      <h3>John Doe</h3>
                    </div>
                  </div>
                </div>
              </a>
              <ul class="active">
                <li>
                  <a href="javascript:void(0);">
                    <div class="member-view-box">
                      <div class="member-image">
                        <div class="member-details">
                          <h3>Member 1</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                  <ul>
                    <li>
                      <a href="javascript:void(0);">
                        <div class="member-view-box">
                          <div class="member-image">
                            <div
                              class="member-details"
                              style={{
                                width: "120px",
                                height: "100px",
                                border: "1px solid black",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                }}
                              >
                                <span>
                                  <Button>
                                    <EditIcon />
                                  </Button>
                                </span>
                                <span>
                                  <Button>
                                    <DeleteIcon />
                                  </Button>
                                </span>
                              </div>
                              <span>
                                <h4>L11</h4>
                              </span>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="javascript:void(0);">
                        <div class="member-view-box">
                          <div class="member-image">
                            <div class="member-details">
                              <Box
                                sx={{
                                  width: 100,
                                  height: 100,
                                  background: "red",
                                }}
                              ></Box>
                            </div>
                          </div>
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>Member 1-3-1</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>Member 1-3-2</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>Member 1-3-3</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div class="member-view-box">
                          <div class="member-image">
                            <div class="member-details">
                              <h3>Member 1-4</h3>
                            </div>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <div class="member-view-box">
                      <div class="member-image">
                        <div class="member-details">
                          <h3>Member 2</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                  <ul>
                    <li>
                      <a href="javascript:void(0);">
                        <div class="member-view-box">
                          <div class="member-image">
                            <div class="member-details">
                              <h3>John Doe</h3>
                            </div>
                          </div>
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div class="member-view-box">
                          <div class="member-image">
                            <div class="member-details">
                              <h3>John Doe</h3>
                            </div>
                          </div>
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div class="member-view-box">
                          <div class="member-image">
                            <div class="member-details">
                              <h3>John Doe</h3>
                            </div>
                          </div>
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>Member 3</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                          <ul>
                            <li>
                              <a href="javascript:void(0);">
                                <div class="member-view-box">
                                  <div class="member-image">
                                    <div class="member-details">
                                      <h3>John Doe</h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <ul>
                                <li>
                                  <a href="javascript:void(0);">
                                    <div class="member-view-box">
                                      <div class="member-image">
                                        <div class="member-details">
                                          <h3>John Doe</h3>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <div class="member-view-box">
                                      <div class="member-image">
                                        <div class="member-details">
                                          <h3>John Doe</h3>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <div class="member-view-box">
                                      <div class="member-image">
                                        <div class="member-details">
                                          <h3>John Doe</h3>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <div class="member-view-box">
                                  <div class="member-image">
                                    <div class="member-details">
                                      <h3>John Doe</h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <ul>
                                <li>
                                  <a href="javascript:void(0);">
                                    <div class="member-view-box">
                                      <div class="member-image">
                                        <div class="member-details">
                                          <h3>John Doe</h3>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <div class="member-view-box">
                                      <div class="member-image">
                                        <div class="member-details">
                                          <h3>John Doe</h3>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="javascript:void(0);">
                                <div class="member-view-box">
                                  <div class="member-image">
                                    <div class="member-details">
                                      <h3>John Doe</h3>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <ul>
                                <li>
                                  <a href="javascript:void(0);">
                                    <div class="member-view-box">
                                      <div class="member-image">
                                        <div class="member-details">
                                          <h3>John Doe</h3>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <div class="member-view-box">
                                      <div class="member-image">
                                        <div class="member-details">
                                          <h3>John Doe</h3>
                                        </div>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0);">
                    <div class="member-view-box">
                      <div class="member-image">
                        <div class="member-details">
                          <h3>Member 3</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                  <ul>
                    <li>
                      <a href="javascript:void(0);">
                        <div class="member-view-box">
                          <div class="member-image">
                            <div class="member-details">
                              <li>
                                <a href="javascript:void(0);">
                                  <div class="member-view-box">
                                    <div class="member-image">
                                      <div class="member-details">
                                        <h3>Member 3</h3>
                                      </div>
                                    </div>
                                  </div>
                                </a>
                                <ul>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div class="member-view-box">
                                        <div class="member-image">
                                          <div class="member-details">
                                            <h3>John Doe</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          <div class="member-view-box">
                                            <div class="member-image">
                                              <div class="member-details">
                                                <h3>John Doe</h3>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          <div class="member-view-box">
                                            <div class="member-image">
                                              <div class="member-details">
                                                <h3>John Doe</h3>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          <div class="member-view-box">
                                            <div class="member-image">
                                              <div class="member-details">
                                                <h3>John Doe</h3>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div class="member-view-box">
                                        <div class="member-image">
                                          <div class="member-details">
                                            <h3>John Doe</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          <div class="member-view-box">
                                            <div class="member-image">
                                              <div class="member-details">
                                                <h3>John Doe</h3>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          <div class="member-view-box">
                                            <div class="member-image">
                                              <div class="member-details">
                                                <h3>John Doe</h3>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      <div class="member-view-box">
                                        <div class="member-image">
                                          <div class="member-details">
                                            <h3>John Doe</h3>
                                          </div>
                                        </div>
                                      </div>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          <div class="member-view-box">
                                            <div class="member-image">
                                              <div class="member-details">
                                                <h3>John Doe</h3>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          <div class="member-view-box">
                                            <div class="member-image">
                                              <div class="member-details">
                                                <h3>John Doe</h3>
                                              </div>
                                            </div>
                                          </div>
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </div>
                          </div>
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div class="member-view-box">
                          <div class="member-image">
                            <div class="member-details">
                              <h3>John Doe</h3>
                            </div>
                          </div>
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div class="member-view-box">
                          <div class="member-image">
                            <div class="member-details">
                              <h3>John Doe</h3>
                            </div>
                          </div>
                        </div>
                      </a>
                      <ul>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <div class="member-view-box">
                              <div class="member-image">
                                <div class="member-details">
                                  <h3>John Doe</h3>
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Account;
// import {
//   Button,
//   Typography,
//   TextField,
//   MenuItem,
//   OutlinedInput,
//   IconButton,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import React, { useState } from "react";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { v4 as uuid } from "uuid";
// import { Filter } from "@mui/icons-material";
// const names = [
//   "Oliver Hansen",
//   "Van Henry",
//   "April Tucker",
//   "Ralph Hubbard",
//   "Omar Alexander",
//   "Carlos Abbott",
//   "Miriam Wagner",
//   "Bradley Wilkerson",
//   "Virginia Andrews",
//   "Kelly Snyder",
// ];

// const MenuProps = {
//   PaperProps: {
//     style: {
//       width: 250,
//     },
//   },
// };

// function Account() {
//   const unique_id = uuid();
//   const small_id = unique_id.slice(0, 8);
//   console.log(small_id, "kkkkkk");
//   const [machines, setMachines] = useState([]);
//   const addSelecetMachines = () => {
//     let machine = {
//       machineName: "",
//       time: "",
//       id: uuid().slice(0, 8),
//     };
//     let updatedMachineList = [...machines, machine];
//     setMachines(updatedMachineList);
//   };
//   const deleteSilgleSelectedMachine = (id) => {
//     let individualDeleteMachine = [...machines].filter(
//       (machine) => machine.id !== id
//     );
//     console.log(individualDeleteMachine, "individualDeleteMachine");
//     setMachines(individualDeleteMachine);
//   };
//   const EditSingleSelectMachine = (val, type, id) => {
//     console.log(val, id);
//     let editData = [...machines];
//     let newEditData = editData.findIndex((machine) => machine.id === id);
//     let machiness = editData[newEditData];
//     console.log(machiness, "kkkkkk");
//     console.log(val, type, id, "mmmmmmm");
//     if (type === "m") {
//       machiness.machineName = val;
//     } else {
//       machiness.time = val;
//     }
//     // editData[newEditData] = machiness;
//     setMachines(editData);
//   };
//   return (
//     <div
//       style={{
//         // border: "1px solid black",
//         width: "70%",
//         margin: "auto",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//         }}
//       >
//         <span>
//           <Typography>
//             <h4>Tagged Machine</h4>
//             <h5>(machine which help for this process)</h5>
//           </Typography>
//         </span>
//         <span style={{ marginTop: "5px" }}>
//           <Button variant="outlined" onClick={addSelecetMachines}>
//             ADD
//           </Button>
//         </span>
//       </div>
//       <div>
//         {machines.map((data) => (
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               marginTop: "10px",
//             }}
//           >
//             <span>
//               <Typography style={{ marginRight: "177px" }}>
//                 Select Machine
//               </Typography>
//               <Select
//                 labelId="demo-multiple-name-label"
//                 id="demo-multiple-name"
//                 style={{ width: "300px" }}
//                 input={<OutlinedInput label="Select machine" />}
//                 MenuProps={MenuProps}
//                 onChange={(e) =>
//                   EditSingleSelectMachine(e.target.value, "m", data.id)
//                 }
//                 value={data.machineName}
//               >
//                 {names.map((name) => (
//                   <MenuItem key={name} value={name}>
//                     {name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </span>
//             <span>
//               <Typography style={{ marginRight: "212px" }}>
//                 Time(Minutes)
//               </Typography>
//               <TextField
//                 id="outlined-basic"
//                 variant="outlined"
//                 value={data.time}
//                 onChange={(e) =>
//                   EditSingleSelectMachine(e.target.value, "t", data.id)
//                 }
//               />
//               <span
//                 style={{ marginLeft: "50px", color: "red", fontSize: "20px" }}
//               >
//                 <IconButton
//                   onClick={() => deleteSilgleSelectedMachine(data.id)}
//                   aria-label="delete"
//                 >
//                   <CloseIcon />
//                 </IconButton>
//               </span>
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Account;
