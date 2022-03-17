//@desc  return image , slug and title
//@route get request
export const fomatItem = (req, res) => {
	console.log(req)
	if (req.body.hasOwnProperty('payload') && req.body.payload.length) {
		const response = req.body.payload
			.filter((e) => e.drm != 'false' && e.episodeCount > 0)
			.map(({ image, slug, title }) => {
				return { image: image.showImage, slug, title }
			})
		res.status(200).contentType('application/json').json({ response: response })
	} else {
		res.status(400).contentType('application/json').json({
			error: 'Could not decode request: JSON parsing failed',
		})
	}
}
