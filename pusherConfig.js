// backend/pusher.js
const Pusher = require('pusher');

const pusher=new Pusher({
    appId:process.env.appId,
    key:process.env.key,
    secret:process.env.secret,
    cluster:process.env.cluster   
});

module.exports = pusher;
