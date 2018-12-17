const mongoose = require('mongoose') 

mongoose.connect( 
    'mongodb://localhost:27017/admin', 
    { useNewUrlParser: true } 
) 

const connection = mongoose.connection 

connection.on('error', function () { 
    console.log('Connect error') 
}) 
connection.once('open', async function () { 
    console.log('MongoDB successfully connected') 
}) 

const profileSchema = mongoose.Schema({ 
    login: String 
}); 



const Profile = connection.model('Profile', profileSchema) 
getAllProfiles = async function(){ 
    let x = await Profile.find({});
    console.log(x);
    return x 
} 


lul = async function(){ 
    console.log(await getAllProfiles());
} 


lul()