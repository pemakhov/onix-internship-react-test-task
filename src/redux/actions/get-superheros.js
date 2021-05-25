import setSuperheros from './set-superheros';
import superheroConstants from '../../constants/superhero-constants';

const { URL } = superheroConstants;

const getSuperheros = (dispatch) => {
  return async (idList) => {
    const superheroPromises = idList.map(async (id) => {
      const res = await fetch(URL + id);
      return res.json();
    });

    const superheros = await Promise.all(superheroPromises);
    return dispatch(setSuperheros(superheros));
  };
};

export default getSuperheros;
