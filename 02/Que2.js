const libexpress = require('express')
const app = libexpress()
const port = 3000
app.get('/', (req, res) => {
    res.send("Welcome!!!")
})
app.listen(port, () => {
    console.log(`Server is running on http://localhost: ${port}`)
})
