const https = require('https')


const get = url => new Promise((resolve, reject) => {
  const comp = url.split('/')
  const host = comp.shift()
  const oprions = {
    hostname: host,
    path: `/${comp.join('/')}`,
    method: 'GET'
  }
  
  const req = https.request(oprions, res => {
    res.setEncoding('utf8')
    let body = ''
    res.on('data', data => {
      body += data
    })
  
    res.on('end', data => {
      //console.log(body)
      const parsed = JSON.parse(body)
      resolve(parsed)
    })
  })
  
  req.on('error', err => {
    reject(err)
  })
  
  req.end()
  
})

const main = async () => {
  const result = await get('jsonplaceholder.typicode.com/users')
  console.log(result)
}

main()