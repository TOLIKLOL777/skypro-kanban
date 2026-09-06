import Card from './Card'

const Column = ({ title, cards }) => {
    return (
    <section className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
    )
}

export default Column;