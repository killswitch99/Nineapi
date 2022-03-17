//@desc  return image , slug and title
//@route get request
export const fomatItem = async (req, res) => {
	const isJson = (item) => {
		item = typeof item !== 'string' ? JSON.stringify(item) : item
		try {
			item = JSON.parse(item)
		} catch (e) {
			return false
		}
		if (typeof item === 'object' && item !== null) {
			return true
		}
		return false
	}
	if (
		isJson(req.body) &&
		req.body.hasOwnProperty('payload') &&
		req.body.payload.length
	) {
		const response = await req.body.payload
			.filter((e) => e.drm != 'false' && e.episodeCount > 0)
			.map(({ image, slug, title }) => {
				return { image: image.showImage, slug, title }
			})
		res.status(200).contentType('application/json').json({ response: response })
	} else {
		res
			.status(400)
			.contentType('application/json')
			.json({
				response: `${JSON.stringify(req.body).replace(/\\n/g, '')}`,
				error: 'Could not decode request: JSON parsing failed',
			})
		console.log(req)
	}
}
