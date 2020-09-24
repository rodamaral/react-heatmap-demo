const URL = process.env.REACT_APP_API

export const getResidences = async () => {
    const res = await fetch(`${URL}/residences`)

    return await res.json()
}

// FIXME type
export const postResidence = async (foo: any) => {
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
        body: JSON.stringify(foo),
    })

    return await res.json()
}
