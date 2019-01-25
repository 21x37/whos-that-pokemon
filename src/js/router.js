homeRoute = (request, response) => {
    if (request.url === '/') {
        response.writeHead(200, {'Content-Type': 'text/plain'})
        response.write('Header\n');
        response.write('Search\n')
        response.end('Hello, World!\n');
    }
};

module.exports.homeRoute = homeRoute;