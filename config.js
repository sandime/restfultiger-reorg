/**
 * Created by SHERRI on 3/15/15.
 */
//module.exports and exports are the same.
//this is how we pass information from all of our files.
//as we pull things into app with require(), they are added to this module.exports object

module.exports = {
    'port': process.env.PORT || 8080,
    'database': 'mongodb://tigerapp:roaring1141@ds049171.mongolab.com:49171/tigerapp',
    'secret': 'beezerthecatthewonderfulwonderfulcat'

};