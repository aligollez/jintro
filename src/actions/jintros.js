import uuid from 'uuid';
import database from '../firebase/firebase';

const dateNow = () => {
  var d = new Date();
  return d.getTime();
};

// ADD_JINTRO
export const addJintro = (jintro) => (
  {
  type: 'ADD_JINTRO',
  jintro
});

export const startAddJintro = (jintroData = {}) => {
  return (dispatch) => {
    const {
      destinationUrl = '',
      offerPageUrl = '',
      shortUrl = '',
      title = '',
      note = '',
      hits = 0 
    } = jintroData;
    const jintro = {destinationUrl, offerPageUrl, shortUrl, title, note, hits};
    database.ref('jintros').push(jintro).then((ref) => {
      dispatch(addJintro({
        id: ref.key,
        ...jintro
      }))
    });
  };
};

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