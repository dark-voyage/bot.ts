import axios from 'axios'

export default async (link) => {
    try {
        const response = await axios.get(link)
        return response.data
    } catch (errors) {
        return null
    }
}
