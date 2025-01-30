export const api = async(url: any, body: any) =>{
    const response = await fetch(`http://localhost:5001/scarlettelove/${url}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json', // Make sure the server knows it's JSON
        },
        body:JSON.stringify(body)
    })
        const json = await response.json()

    return json
}

export const formApi = (url: any, body: any) =>{
    return api(url, body)
}