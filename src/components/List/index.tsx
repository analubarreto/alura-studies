import React from 'react';

const List = () => {
  const tasks = [
    {
      id: 1,
      title: 'React',
      time: '02:00:00'
    },
    {
      id: 2,
      title: 'JS',
      time: '01:00:00'
    },
    {
      id: 3,
      title: 'TS',
      time: '03:00:00'
    }
  ];

  return (
    <aside>
      <h2>Day studies</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{ task.title }</h3>
            <span>{ task.time }</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;