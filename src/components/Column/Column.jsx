import Card from "../Card/Card";
import { ColumnS, ColumnTitle, Cards } from "./Column.styled";

const Column = ({ title, cards }) => {
  return (
    <ColumnS>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>

      <Cards>
        {cards.map((card) => (
          <Card key={card._id} {...card} />
        ))}
      </Cards>
    </ColumnS>
  );
};

export default Column;
