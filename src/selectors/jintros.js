export default (jintros, { text, sortBy, startDate, endDate }) => {
  return jintros.filter((jintro) => {
    const startDateMatch = typeof startDate !== 'number' || jintro.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || jintro.createdAt <= endDate;
    
    const textMatch =  ['title', 'note']
      .map(prop => jintro[prop].toLowerCase())
      .some(s => s.includes(text.toLowerCase()));

    // const textMatch = [jintro.title, jintro.note]
    //   .some(s => s.toLowerCase()
    //   .includes(text.toLowerCase()));

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy == 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'hits') {
      return a.hits < b.hits ? 1 : -1;
    }
  });
};