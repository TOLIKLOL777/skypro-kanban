import Column from './Column'
import { cardlist } from '../data'
import Loader from './Loader'
import { MainS, Container, MainContent } from "../styled-components/Main.styled";

const Main = ({ loading }) => {
    const columns = {}
    for (const card of cardlist) {
        if (!columns[card.status]) {
            columns[card.status] = {
                title: card.status,
                cards: []
            }
            columns[card.status].cards.push(card)
        } else {
            columns[card.status].cards.push(card)
        }
    }
    console.log(columns)

    return (
    <MainS>
      { loading ? <Loader /> : (
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
      </Container>)
      }
    </MainS>
    )
}

export default Main;