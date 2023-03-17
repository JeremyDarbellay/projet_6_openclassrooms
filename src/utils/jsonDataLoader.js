import data from './logements.json'

/**
 * return json object containing 
 * our apartments
 * @return {object} the data array
 */
export async function loadAllApartments() {

    const apartments = await data

    return { apartments }

}

/**
 * return data for only one apartment
 * from its Id
 * @param {string} Id the apartment id
 * @return {object} the apartment data
 */
export async function loadOneApartment(Id) {

    const apartment = await data.filter(apt => apt.id === Id)

    return { apartment }

}