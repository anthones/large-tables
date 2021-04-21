import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { TypeSelect } from "./TypeSelect";
import { StatusSelect } from "./StatusSelect";

export interface RowProps {
  id: number;
  name: string;
}

export interface RowState {
  showForm?: boolean;
  name?: string;
}

export class Row extends PureComponent<RowProps, RowState> {
  constructor(props: RowProps) {
    super(props);
    this.state = {
      showForm: false,
      name: props.name,
    };
  }

  static propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.func,
    status: PropTypes.func,
  };

  private onFormChange<
    T extends
      | React.FocusEvent<HTMLInputElement>
      | React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
  >(event: T, showForm: boolean): void {
    const name = (event.target as keyof T | any).value;
    const { name: oldName, showForm: oldShow } = this.state;

    this.setState({
      ...(name && oldName !== name && { name }),
      ...(showForm !== oldShow && { showForm }),
    });
  }

  private readonly renderNameInput = () => {
    return (
      <input
        autoFocus
        type="text"
        name="New name"
        onBlur={event =>
          this.onFormChange<React.FocusEvent<HTMLInputElement>>(event, false)
        }
      />
    );
  };

  render() {
    const { id } = this.props;
    const { showForm, name } = this.state;
    return (
      <tr>
        <td>{id}</td>
        <td
          onClick={event =>
            this.onFormChange<
              React.MouseEvent<HTMLTableDataCellElement, MouseEvent>
            >(event, true)
          }
        >
          {showForm ? this.renderNameInput() : name}
        </td>
        <td>{<TypeSelect factor={id} />}</td>
        <td>{<StatusSelect factor={id} />}</td>
      </tr>
    );
  }
}

export default Row;
