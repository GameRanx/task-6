import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "10px" }}>
        <strong className="blue">Github stats</strong>
      </h1>
      <GitHubCalendar
        username="GameRanx"
        blockSize={15}
        blockMargin={5}
        color="#c08"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
