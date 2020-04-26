require('./server')({
        port: 3001, 
        cb: () => console.log('host is running in port 3001')
    })