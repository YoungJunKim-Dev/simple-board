import React from "react";
import { TableRow, TableCell } from "@mui/material";

function Member(props) {
  const { member_id, image, username, birthday, nationality, email, onClick } =
    props;

  return (
    <>
      <TableRow>
        <TableCell>{member_id}</TableCell>
        <TableCell>
          <img
            src={image}
            alt="profile"
            style={{ height: "100px", width: "100px" }}
          />
        </TableCell>
        <TableCell>{username}</TableCell>
        <TableCell>{birthday}</TableCell>
        <TableCell>{nationality}</TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>
          <button onClick={() => onClick(member_id)}>삭제</button>
        </TableCell>
      </TableRow>
    </>
  );
}

export default Member;
