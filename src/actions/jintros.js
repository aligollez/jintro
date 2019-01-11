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

    return database.ref('jintros').push(jintro).then((ref) => {
      dispatch(addJintro({
        id: ref.key,
        ...jintro
      }))
    });
  };
};

// REMOVE_JINTRO
export const removeJintro = ({ id } = {}) => ({
  type: 'REMOVE_JINTRO',
  id
});

export const startRemoveJintro = ({ id } = {}) => {  
  return (dispatch) => {
    return database.ref(`jintros/${id}`).remove().then(() => {
      dispatch(removeJintro({ id }))
    })
  }
}

// EDIT_JINTRO
export const editJintro = (shortUrl, updates) => ({
  type: 'EDIT_JINTRO',
  shortUrl,
  updates
});

// SET_JINTROS
export const setJintros = (jintros) => ({
  type: 'SET_JINTROS',
  jintros
})

export const startSetJintros = () => {
  return (dispatch) => {
    return database.ref('jintros').once('value').then((snapshot) => {
      const jintros = [];

      snapshot.forEach((childSnapshot) => {
        jintros.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      dispatch(setJintros(jintros));
    })
  }
}