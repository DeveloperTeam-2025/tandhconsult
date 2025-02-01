export const api = async(url: any, body: any) =>{
    const response = await fetch(`https://nodejs-google.vercel.app/scarlettelove/${url}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json', // Make sure the server knows it's JSON
        },
        body:JSON.stringify(body)
    })
        const json = await response.json()
        const status = !json.status ? {"response": "Fill the form"} : json
    return status
}

export const formApi = (url: any, body: any) =>{
    return api(url, body)
}