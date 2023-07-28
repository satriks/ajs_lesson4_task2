import checkOreder from '../checkOrder';

test('check order', () => {
  const arr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  expect(checkOreder(arr))
    .toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
});

// checkOrder([
//     {name: 'мечник', health: 10},
//     {name: 'маг', health: 100},
//     {name: 'лучник', health: 80},
//   ])
