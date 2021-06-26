import _ from "lodash";
import React, { Component } from "react";

class TableBody extends Component {
  // renders the content of a cell
  renderCell = (item, column) => {
    if (column.content) return column.content(item); //for the like and delete buttons
    return _.get(item, column.colName); // for the rest of the cells
  };

  render() {
    const { data, columns } = this.props;

    return (
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map((column) => (
              <td>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
