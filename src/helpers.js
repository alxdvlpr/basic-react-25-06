export const generateId = () =>
  Math.random()
    .toString(36)
    .substr(2, 9)

export const reduceDataStructure = (data) =>
  data.reduce(
    (acc, item) => ({
      ...acc,
      [item.id]: item
    }),
    {}
  )
