import axios from 'axios'
const baseUrl = 'https://rel.ink/api/links/'
const shortLink = 'https://rel.ink/'

const shortenLink = async (inputUrl) => {
    try {
        const { hashid } = await axios.post(baseUrl, { urL : inputUrl })
        const responseUrl = {
            inputUrl,
            shortenedUrl : `${shortLink}/${hashid}`
        }
        return responseUrl;
    } catch (error) {
        console.log(error);
    }
}

export default shortenLink