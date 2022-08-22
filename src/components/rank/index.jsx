import Table from "react-bootstrap/Table";

import "./styles.css";

export default function DarkExample() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {localStorage.getItem("rankingScore").map(user => (
          <tr>
            <td></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
