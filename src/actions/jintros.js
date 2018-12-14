import uuid from 'uuid';
import shortid from 'shortid';

const dateNow = () => {
  var d = new Date();
  return d.getTime();
};

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+?');
const shortId = shortid.generate();

// ADD_JINTRO
export const addJintro = (
  {
    destinationUrl = '',
    campaignUrl = '',
    shortUrl = shortId,
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
    campaignUrl,
    shortUrl: shortUrl && shortUrl,
    title,
    note,
    hits,
    createdAt: dateNow()
  }
});

// REMOVE_JINTRO
export const removeJintro = ({ id } = {}) => ({
  type: 'REMOVE_JINTRO',
  id
});

// EDIT_JINTRO
export const editJintro = (id, updates) => ({
  type: 'EDIT_JINTRO',
  id,
  updates
});