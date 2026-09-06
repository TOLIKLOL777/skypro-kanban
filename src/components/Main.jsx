import Column from './Column'
import { cardlist } from '../data'
import Loader from './Loader'

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
    <main className="main">
      { loading ? <Loader /> : (
      <div className="container">
        <div className="main__content">
          {Object.values(columns).map((column, index) => (
            <Column
              key={index}
              title={column.title}
              cards={column.cards}
            />
          ))}
        </div>
      </div>)
      }
    </main>
    )
}

export default Main;