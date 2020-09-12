import axios from 'axios'
const baseUrl = 'https://rel.ink/api/links/'
const shortLink = 'https://rel.ink/'

const shortenLink = async (inputUrl) => {
    try {
        const { hashid, url, created_at } = await axios.post(baseUrl, { urL : inputUrl })
        const responseUrl = {
            inputUrl,
            shortenedUrl : `${shortLink}/${hashid}`
        }
    } catch (error) {
        console.log(error);
    }
}

export default shortenLink