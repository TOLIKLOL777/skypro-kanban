import Column from "../Column/Column";
import Loader from "../Loader/Loader";
import { MainS, Container, MainContent } from "./Main.styled";

const Main = ({ error, cards, loading }) => {
  const columns = {
    "Без статуса": { title: "Без статуса", cards: []},
    "Нужно сделать": { title: "Нужно сделать", cards: []},
    "В работе": { title: "В работе", cards: []},
    "Тестирование": { title: "Тестирование", cards: []},
    "Готово": { title: "Готово", cards: []},
  };

  if (cards) {
    for (const card of cards) {
      if (columns[card.status]) {
        columns[card.status].cards.push(card);
      }
    }
  }
  console.log(columns);

  return (
    <MainS>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <MainContent>
            {Object.values(columns).map((column, index) => (
              <Column
                key={index}
                title={column.title}
                cards={column.cards}
              />
            ))}
          </MainContent>
        </Container>
      )}
      {error && <div>{error}</div>}
    </MainS>
  );
};

export default Main;