const jintroReducerDefaultState = [];

export default (state = jintroReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_JINTRO':
      return [
        ...state,
        action.jintro
      ];
    case 'REMOVE_JINTRO':
      return state.filter(({ shortUrl }) => shortUrl !== action.shortUrl);
    case 'EDIT_JINTRO':
      return state.map((jintro) => {
        if (jintro.shortUrl === action.shortUrl) {
          return {
            ...jintro,
            ...action.updates
          }
        } else {
          return jintro
        };
      });
    default:
      return state;
  }
}