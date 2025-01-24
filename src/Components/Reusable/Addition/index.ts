export const edit  = (data: string) => {
    return data.toLowerCase().split(' ').join('-')
}