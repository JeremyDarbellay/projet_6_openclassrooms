import data from './logements.json'

/**
 * return json object containing 
 * our apartments
 * @return {object} the data array
 */
export async function loadAllApartments() {

    const apartments = await data

    if ( apartments.length === 0 ) throw new Response('', { status: 404 })

    return { apartments }

}

/**
 * return data for only one apartment
 * from its Id
 * @param {string} Id the apartment id
 * @return {array} the apartment data
 */
export async function loadOneApartment(Id) {

    const apartment = await data.filter(apt => apt.id === Id)

    if ( apartment.length === 0 ) throw new Response('', { status: 404 })

    return { apartment }

}