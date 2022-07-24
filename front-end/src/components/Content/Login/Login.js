import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HttpsIcon from "@mui/icons-material/Https";
import SendIcon from "@mui/icons-material/Send";
import { teal } from "@mui/material/colors";
import { API } from "../../../config/constant";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © YourWebsite 2022 "}
    </Typography>
  );
}

const Textfieldstyle = {
  mt: 2,
  width: "50ch",
};

export default function Login() {
  const navigate = useNavigate();
  const intialValues = { email: "", password: "" };
  const [values, setValues] = useState(intialValues);
  const [formEroors, setFormEroors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  }

  async function handleSend(e) {
    e.preventDefault();
    setFormEroors(validate(values));
    loginCheck();
  }

  async function loginCheck() {
    const url = `${API.USER.LOGIN}`;
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const result = await res.json();
    console.log(res);
    if (res.status === 200) {
      localStorage.setItem("result", JSON.stringify(result));
      navigate("/Users");
    } else {
      navigate("/login");
    }
  }

  const validate = (values) => {
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    const eroors = {};
    if (!values.email) {
      eroors.email = "メールアドレスを入力ししてしてください。";
    } else if (!regex.test(values.email)) {
      eroors.email = "正しいメールアドレスを入力してください。";
    }
    if (!values.password) {
      eroors.password = "パスワードを入力ししてしてください。";
    } else if (values.password.length < 4) {
      eroors.password = "4文字以上15文字以下のパスワードを入力してください。";
    } else if (values.password.length > 15) {
      eroors.password = "4文字以上15文字以下のパスワードを入力してください。";
    }
    return eroors;
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ bgcolor: teal[400] }}>
            <HttpsIcon fontSize="large" />
          </Avatar>
          <Typography variant="h4" sx={{ mt: 2 }}>
            Sign in
          </Typography>
          <TextField
            // fullWidth
            required
            id="email"
            type="email"
            label="Your Email Address"
            variant="outlined"
            name="email"
            sx={Textfieldstyle}
            value={values.email}
            helperText={formEroors.email}
            error={formEroors.email ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            // fullWidth
            required
            id="password"
            type="password"
            label="Your Password"
            variant="outlined"
            name="password"
            sx={Textfieldstyle}
            value={values.password}
            helperText={formEroors.password}
            error={formEroors.password ? true : false}
            onChange={(e) => handleChange(e)}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: teal[400],
              mt: 2,
              fontSize: 14,
              width: "45ch",
              "&:hover": {
                bgcolor: teal[200],
              },
            }}
            endIcon={<SendIcon />}
            onClick={(e) => handleSend(e)}
          >
            Sign in
          </Button>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 4, md: 7 }}
            sx={{ mt: 2 }}
          >
            <Link href="#">Forget your password?</Link>
            <Link href="#">Don't have an account? Sign Up</Link>
          </Stack>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Container>
    </>
  );
}
