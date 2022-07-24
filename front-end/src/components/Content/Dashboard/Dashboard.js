import React, { useEffect } from "react";
import Layouts from "../../Layouts/Layouts";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../../features/counter/CounterSlice";
import { showIcon } from "../../../features/counter/ShowIcon";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.counter.value);
  const showState = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Layouts>
        <div>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={() => dispatch(increment())}>
              Increment
            </Button>
            <span>{count}</span>
            <Button variant="contained" onClick={() => dispatch(decrement())}>
              Decrement
            </Button>
          </Stack>
          <Stack spacing={14} direction="row" mt={2}>
            {showState ? (
              <Button
                color="secondary"
                variant="outlined"
                onClick={() => dispatch(showIcon())}
                startIcon={<RemoveCircleIcon />}
              >
                HIDE ICON
              </Button>
            ) : (
              <Button
                variant="outlined"
                onClick={() => dispatch(showIcon())}
                startIcon={<AddCircleIcon />}
              >
                SHOW ICON
              </Button>
            )}
          </Stack>
        </div>
      </Layouts>
    </>
  );
}
