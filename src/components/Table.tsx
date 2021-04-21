import React, { PureComponent, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import HeaderRow from "./HeaderRow";

import "./Table.css";
const Row = lazy(() => import("./Row"));

interface TableProps {
  rows: number;
}

export class Table extends PureComponent<TableProps> {
  static propTypes = {
    rows: PropTypes.number,
  };

  render() {
    const { rows = 0 } = this.props;
    return (
      <table>
        <thead>
          <HeaderRow />
        </thead>
        <tbody>
          <Suspense fallback={<tr><td>Loading...</td></tr>}>
          {[...Array(rows)].map((_, i) => (
            <Row id={i} name={`Name${i}`} key={i} />
          ))}
          </Suspense>
        </tbody>
      </table>
    );
  }
}

export default Table;
