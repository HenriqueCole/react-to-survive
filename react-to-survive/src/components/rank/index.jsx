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
        <tr>
          <td>1</td>
          <td>Otto</td>
          <td>00:12:25</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Otto</td>
          <td>00:12:25</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Otto</td>
          <td>00:12:25</td>
        </tr>
      </tbody>
    </Table>
  );
}
