import axios from 'axios'
const baseUrl = 'https://rel.ink/api/links/'
const shortLink = 'https://rel.ink/'

export const shortenLink = async (inputUrl) => {
    try {
        const { hashid } = await axios.post(baseUrl, { "urL" : inputUrl })
        const responseUrl = {
            inputUrl,
            shortenedUrl : `${shortLink}/${hashid}`
        }
        console.log(responseUrl);
        return responseUrl;
    } catch (error) {
        console.log(error);
    }
}


export const shortenLink2 = async (inputUrl) => {
    try {
        const { data: { hashid, url, created_at } } = await axios.post(baseUrl, { url: inputUrl })
        const targetLink = `${shortLink}${hashid}`
        return { inputUrl, hashid, url, created_at, targetLink }
    }catch (error) {
        console.log(error);
    }
}