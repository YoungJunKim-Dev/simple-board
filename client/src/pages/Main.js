import React from "react";
import { useEffect, useState } from "react";
import Member from "../components/Member";
import axios from "axios";
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  Paper,
  CircularProgress,
  TableRow,
  TableContainer,
} from "@mui/material";

const Main = () => {
  const url = "/api/members";
  const [members, setMembers] = useState("");

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    fetch(url)
      .then((result) => result.json())
      .then((json) => setMembers(json));
  };

  const onClick = (member_id) => {
    axios
      .delete(`/api/members?member_id=${member_id}`)
      .then((res) => {
        console.log(res);
        setRefresh();
      })
      .catch((err) => console.log(err));
  };

  const setRefresh = () => {
    callApi();
    console.log("called");
  };

  return (
    <>
      <TableContainer component={Paper} variant="outlined">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>프로필</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>국적</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell>삭제</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members ? (
              members.map((member) => (
                <Member key={member.member_id} {...member} onClick={onClick} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} align={"center"}>
                  <CircularProgress color="secondary" />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Main;
