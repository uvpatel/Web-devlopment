# HTTP
- client server communicate
- URL, URI , URN  is like address identifier 

## What are HTTP headers
metadata - key-value sent along with request & response
- caching , authentication, manage state x - prefix - 2012 (x- depreacted)
- Request Headers - from Client
- Response Headers - from Server
- Representation Headers - encoding/compression
- Payload Headers - data


## Most common Header
- Accept : application/json
- User-Agent
- Authorization
- Content-Type
- Cookie
- Cache-Control

- Accept is tells which type of data accept today world mostly api
- User Agent tell who sends requiest all details
- Autherization - Bearrer
- Content - Type
- Cookie - object key value pair
- cache - control (expire data within time limit)

### CORS
- Access-Control-Allow-Origin
- Access-Control-Allow -Credentials
- Access-Control-Allow -Method

## Security
- Cross-Origin-Embedder - Policy
- Cross-Origin-Opener - Policy
- Content - Security - Policy
- X-XSS - Protection

## HTTP methods
Basis set of operations that can be used to interact with server
- GET : retrieve a resorce
- HEAD: No message body (response headers only)
- OPTIONS : what operations are available
- TRACE : Loopback test (get same data)
- DELETE : remove a resorce
- PUT : replace a resorce
- POST : interact with resource (mostly add)
- PATCH : change part of a resource

### HTTP Status Code
- 1xx Informational (range)
- 2xx Success
- 3xx Redirection
- 4xx Client error
- 5xx Server error

100 - Continue 
102 - Processing
200 - OK
201 - created
202 - accepted
307 - temporary redirect
308 - permanent redirect
400 - Bad request
401 - Unauthorized
402 - Payment required
404 - Not found
500 - Internal Server Error
504 - Gateway time da

