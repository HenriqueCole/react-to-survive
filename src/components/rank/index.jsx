import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./styles.css";

export default function DarkExample() {
  const [usersRank, setUsersRank] = useState(
    JSON.parse(localStorage.getItem("usersRanking")).sort((a, b) => {
      return a.time < b.time ? 1 : -1;
    })
  );

  useEffect(() => {}, [usersRank]);

  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {usersRank.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
