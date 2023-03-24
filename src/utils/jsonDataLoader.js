import data from './logements.json'

/**
 * return json object containing 
 * our apartments
 * @return {array} the data array
 */
export async function loadAllApartments() {

    const apartments = await data

    if (apartments.length === 0) throw new Response('', { status: 404 })

    return { apartments }

}

/**
 * return data for only one apartment
 * from its Id
 * @param {string} Id the apartment id
 * @return {Object} the apartment data
 */
export async function loadOneApartment(Id) {

    const apartmentArray = await data.filter(apt => apt.id === Id)

    if (apartmentArray.length !== 1) throw new Response('', { status: 404 })

    const apartment = apartmentArray[0]

    return { apartment }

}