const requestHandler = (req, res) => {
    if(req.url === '/user'){
        res.end('Hello me');
    }
    else{
        res.statusCode = 200;
        res.end('Hello World');
    }
}

module.exports.requestHandler;