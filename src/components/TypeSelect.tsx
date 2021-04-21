import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { ActionTypes, TypeSelectOptions, updateOptions } from "../actions";
import { StoreState } from "../reducers";
import { RowProps } from "./Row";

interface TypeSelectStoreProps {
  typeOptions?: TypeSelectOptions[] | string[];
  updateOptions?: typeof updateOptions;
}

interface TypeSelectOwnProps {
  factor: RowProps["id"];
}

interface TypeSelectState {
  value: string;
}

interface GameVariant {
  factor: number;
  appendix: string;
}

export default class _TypeSelect extends PureComponent<
  TypeSelectStoreProps & TypeSelectOwnProps,
  TypeSelectState
> {
  constructor(props: TypeSelectStoreProps & TypeSelectOwnProps) {
    super(props);
    this.state = { value: "" };
  }

  private readonly rules: GameVariant[] = [
    {
      factor: 3,
      appendix: "Fizz",
    },
    {
      factor: 5,
      appendix: "Buzz",
    },
  ];

  componentDidMount() {
    this.calculateValue();
  }

  private readonly handleChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const { value } = event.target;
    if (value !== TypeSelectOptions.New) {
      event.preventDefault();
      this.setState({ value });
    } else {
      const value = prompt(
        "Please enter a new option name",
        "TypeBanana"
      ) as string;
      if (value !== undefined || value !== "") {
        this.props.updateOptions!(ActionTypes.updateTypeOptions, value);
        this.setState({ value });
      }
    }
  };

  private readonly calculateValue = (): void => {
    const { factor: number } = this.props;
    let word = "";
    this.rules.forEach(({ factor, appendix }) => {
      if (number > 0 && number % factor === 0) word += appendix;
    });
    this.setState({ value: `Type${word !== "" ? word : "N"}` });
  };

  render(): JSX.Element {
    const { value } = this.state;
    const { typeOptions } = this.props;

    return (
      <select value={value} onChange={this.handleChange}>
        {typeOptions &&
          typeOptions.length &&
          typeOptions.map<JSX.Element>(
            (option: keyof TypeSelectOptions | string, i: number) => (
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
  typeOptions,
}: StoreState): { typeOptions: TypeSelectOptions[] | string[] } => ({
  typeOptions,
});

export const TypeSelect = connect(mapStateToProps, { updateOptions })(
  _TypeSelect
);
