//imports
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
const mock = new MockAdapter(axios)


//data
const data = [
    {
        firstname: "Khushboo",
        lastname: "Yadav"
    },
    {
        firstname: "Tejas",
        lastname: "Thakare"
    }
]

// ------------------------------------------------
// GET: GET All Data
// ------------------------------------------------
mock.onGet('/getData').reply(config => {
    return data ? [200, data] : [404]
})

// ------------------------------------------------
// POST: Add new Data
// ------------------------------------------------
mock.onPost('/addData').reply(config => {
    const { firstname, lastname } = JSON.parse(config.data)
    data.push({
        firstname,
        lastname
    })
    return [200]
})



//ignore
mock.onAny().passThrough()
