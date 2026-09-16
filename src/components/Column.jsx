import Card from './Card'
import { ColumnS, ColumnTitle, Cards } from '../styled-components/Column.styled'

const Column = ({ title, cards }) => {
    return (
    <ColumnS>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>

      <Cards>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </Cards>
    </ColumnS>
    )
}

export default Column;