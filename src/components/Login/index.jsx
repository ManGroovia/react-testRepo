import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
export const Login = () => {
  let data = {};
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    data = {
      username: username,
      password: password,
    };
    console.log(data);
  };
  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          onChange={(e) => setUserName(e.target.value)}
          id="outlined-basic"
          label="Username"
          variant="outlined"
        />
        <TextField
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          id="filled-basic"
          label="Password"
          variant="outlined"
        />
        <TextField
          type="password"
          id="standard-basic"
          label="Confirm Passworld"
          variant="outlined"
        />
      </Box>
      <Stack spacing={2} direction="row">
        <Button onClick={handleSubmit} type="submit" variant="contained">
          Contained
        </Button>
      </Stack>
    </div>
  );
};
