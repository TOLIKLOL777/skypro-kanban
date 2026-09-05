import Column from './Column'

const Main = () => {
    const columns = [
    {
        title: 'Без статуса',
        cards: [
        {
            title: 'Название задачи',
            category: 'Web Design',
            color: 'orange',
            date: '30.10.23',
        },
        {
            title: 'Название задачи',
            category: 'Research',
            color: 'green',
            date: '30.10.23',
        },
        {
            title: 'Название задачи',
            category: 'Web Design',
            color: 'orange',
            date: '30.10.23',
        },
        {
            title: 'Название задачи',
            category: 'Copywriting',
            color: 'purple',
            date: '30.10.23',
        },
        {
            title: 'Название задачи',
            category: 'Web Design',
            color: 'orange',
            date: '30.10.23',
        },
        ],
    },
    {
        title: 'Нужно сделать',
        cards: [
        {
            title: 'Название задачи',
            category: 'Research',
            color: 'green',
            date: '30.10.23',
        },
        ],
    },
    {
        title: 'В работе',
        cards: [
        {
            title: 'Название задачи',
            category: 'Research',
            color: 'green',
            date: '30.10.23',
        },
        {
            title: 'Название задачи',
            category: 'Copywriting',
            color: 'purple',
            date: '30.10.23',
        },
        {
            title: 'Название задачи',
            category: 'Web Design',
            color: 'orange',
            date: '30.10.23',
        },
        ],
    },
    {
        title: 'Тестирование',
        cards: [
        {
            title: 'Название задачи',
            category: 'Research',
            color: 'green',
            date: '30.10.23',
        },
        ],
    },
    {
        title: 'Готово',
        cards: [
        {
            title: 'Название задачи',
            category: 'Research',
            color: 'green',
            date: '30.10.23',
        },
        ],
    },
    ]

    return (
        <main className="main">
      <div className="container">
        <div className="main__content">
          {columns.map((column) => (
            <Column
              key={column.title}
              title={column.title}
              cards={column.cards}
            />
          ))}
        </div>
      </div>
    </main>
    )
}

export default Main;