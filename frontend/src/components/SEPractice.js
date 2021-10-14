import React from "react";
import articles from "../dumydata/articles.js";
import Styles from "../components/tablestyle";
import Table from "../components/Evidencetable";
import tablecolumns from "./tablecolumns";
import Dropdown from "./Dropdown.js";

const SEPractice = () => {
  return (
    <div>
      <h2>Select SE Practice to get evidence for the claimed benefits</h2>
      <Dropdown>
        <Styles>
          <Table>
            data={articles}
            columns={tablecolumns}
          </Table>
        </Styles>
      </Dropdown>
    </div>
  );
};

export default SEPractice;
