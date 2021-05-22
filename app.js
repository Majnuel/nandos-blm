const express = require("express")
const path = require('path')
const { DateTime } = require('luxon')

const app = express()


const port = 3030

//these times need to match across its 3 locations: nandos site, BLM site and the server, format: YYYY, MM, DD, HH, MM
const floydStart = DateTime.local(2021, 5, 22, 17, 24);
const floydEnd = DateTime.local(2021, 5, 22, 17, 25);

app.get('/', (req, res) => {
    let luxonNow = DateTime.now()
    if (luxonNow > floydStart && luxonNow < floydEnd) {
        console.log(luxonNow.toString())
        console.log("Displaying Black Lives Matter:", luxonNow.toString())
        res.sendFile(path.join(__dirname+'/black_lives_matter.html'))    
    } else {
        console.log("Displaying Regular Site:" ,luxonNow.toString())
        res.sendFile(path.join(__dirname+'/index.html'))
    }
})

app.get('/black_lives_matter', (req, res) => {
    res.sendFile(path.join(__dirname+'/black_lives_matter.html'))
})

app.listen(port, () => {
    console.log("SERVER RUNNING ON PORT ", port)
})

