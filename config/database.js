if(process.env.NODE_ENV === 'production'){
    module.exports = {mongoURI: 'mongodb://shiveshkumar:shivesh123@ds229474.mlab.com:29474/newyorkguide'}
}else{
    module.exports = {mongoURI: 'mongodb://localhost/nyg-dev'}
}