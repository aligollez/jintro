import uuid from 'uuid';

const dateNow = () => {
  var d = new Date();
  return d.getTime();
};

// ADD_JINTRO
export const addJintro = (
  {
    destinationUrl = '',
    offerPageUrl = '',
    shortUrl = '',
    title = '',
    note = '',
    hits = 0    
  } = {}
) => (
  {
  type: 'ADD_JINTRO',
  jintro: {
    id: uuid(),
    destinationUrl,
    offerPageUrl,
    shortUrl: shortUrl,
    title,
    note,
    hits,
    createdAt: dateNow(),
    isJintro: true
  }
});

// REMOVE_JINTRO
export const removeJintro = ({ shortUrl } = {}) => ({
  type: 'REMOVE_JINTRO',
  shortUrl
});

// EDIT_JINTRO
export const editJintro = (shortUrl, updates) => ({
  type: 'EDIT_JINTRO',
  shortUrl,
  updates
});