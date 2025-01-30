export const api = async(url: any, body: any) =>{
    const response = await fetch(`http://scarlettelove.com/google-sheets-api/api/${url}`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json', // Make sure the server knows it's JSON
        },
        body:JSON.stringify(body)
    })
        const json = await response.json()
    if(response.status !==200){
        alert(json.message)
    }

    return json
}

export const formApi = (url: any, body: any) =>{
    return api(url, body)
}