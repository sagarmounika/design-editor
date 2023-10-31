import axios from 'axios'

const pixabayClient = axios.create({
  baseURL: 'https://pixabay.com/api/',
})

const PIXABAY_KEY = "29364504-a2d04c7e6158e546dedbd3568"

export interface PixabayImage {
  id: string
  webformatURL: string
  previewURL: string
}
export function getPixabayImages(query: string): Promise<PixabayImage[]> {
  let encodedWord = query.replace(/\s+/g, '+').toLowerCase()
  return new Promise((resolve, reject) => {
    pixabayClient
      .get(`?key=${PIXABAY_KEY}&q=${encodedWord}&image_type=photo`)
      .then(response => {
        resolve(response.data.hits)
      })
      .catch(err => reject(err))
  })
}
