import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { StoreState } from "../reducers";
import { ActionTypes, StatusSelectOptions, updateOptions } from "../actions";
import { RowProps } from "./Row";

interface StatusSelectStoreProps {
  statusOptions?: StatusSelectOptions[] | string[];
  updateOptions?: typeof updateOptions;
}

interface StatusSelectOwnProps {
  factor: RowProps["id"];
}

interface StatusSelectState {
  value: string;
}

export default class _StatusSelect extends PureComponent<
  StatusSelectStoreProps & StatusSelectOwnProps,
  StatusSelectState
> {
  constructor(props: StatusSelectStoreProps & StatusSelectOwnProps) {
    super(props);
    this.state = { value: "" };
  }

  componentDidMount() {
    this.calculateValue();
  }

  private readonly handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = event.target;
    if (value !== StatusSelectOptions.New) {
      event.preventDefault();
      this.setState({ value });
    } else {
      const value = prompt(
        "Please enter a new option name",
        "StatusBanana"
      ) as string;
      if (value !== undefined || value !== "") {
        this.props.updateOptions!(ActionTypes.updateStatusOptions, value);
        this.setState({ value });
      }
    }
  };

  private readonly isPrime = (number: number): boolean =>
    Array.from({ length: number }, (_, i) => i + 1).filter(
      i => number % i === 0
    ).length === 2;

  private readonly calculateValue = (): void => {
    const { factor } = this.props;
    this.setState({
      value: `Status${
        factor <= 1 ? "FizzBuzz" : this.isPrime(factor) ? "Fizz" : "Buzz"
      }`,
    });
  };

  render(): JSX.Element {
    const { value } = this.state;
    const { statusOptions } = this.props;

    return (
      <select value={value} onChange={this.handleChange}>
        {statusOptions &&
          statusOptions.length &&
          statusOptions.map<JSX.Element>(
            (option: keyof StatusSelectOptions | string, i: number) => (
              <option value={option} key={i}>
                {option}
              </option>
            )
          )}
      </select>
    );
  }
}

const mapStateToProps = ({
  statusOptions,
}: StoreState): { statusOptions: StatusSelectOptions[] | string[] } => ({
  statusOptions,
});

export const StatusSelect = connect(mapStateToProps, { updateOptions })(
  _StatusSelect
);
