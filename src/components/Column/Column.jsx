import Card from "../Card/Card";
import { ColumnS, ColumnTitle, Cards, EmptyCards } from "./Column.styled";

const Column = ({ title, cards }) => {
  console.log({cards});
  
  return (
    <ColumnS>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {!cards?.length ? <EmptyCards>Новых задач нет</EmptyCards> :
          cards.map((card) => (
            <Card key={card.id ?? card._id} {...card} />
          ))
        }
      </Cards>
      
    </ColumnS>
  );
};

export default Column;