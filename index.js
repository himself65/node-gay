const Express = require('express')

const darkflames = Express()

// todo: response a colorful black
darkflames.get('/', (req, res) => {
	res.send('darkflames is a gqy')
})

darkflames.listen(3000)
