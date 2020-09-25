const URL = process.env.REACT_APP_API

export type PostResidenceType = {
    id?: number
    cep: string
    houseNumber: number
    latitude: number
    longitude: number
    quantity: number
}

export const getResidences = async () => {
    const res = await fetch(`${URL}/residences`)

    return await res.json()
}

export const postResidence = async (body: PostResidenceType) => {
    const res = await fetch(`${URL}/residences`, {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(body),
    })

    return await res.json()
}

export const deleteResidence = async (id: number) => {
    const res = await fetch(`${URL}/residences/${id}`, {
        method: 'DELETE',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    })

    return await res.json()
}
