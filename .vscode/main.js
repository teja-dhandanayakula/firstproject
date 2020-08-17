var admin = require("firebase-admin");

var serviceAccount = require("C:\\Users\\teja.dhandanayakula\\Desktop\\Kranthi\\DB_ACCESS_PVT_KEY\\smart-data-capture-firebase-adminsdk-p67q0-d47888f0a5.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://smart-data-capture.firebaseio.com"
});

var db = admin.firestore();

async function inQueries(siteId, dateStr) {
var sampleRef = db.collection('SAMPLE');
var site = await sampleRef.where('siteId', '==', siteId).where('date', '==', dateStr).get();
//var site = await sampleRef.where('userName', 'in', ['GEFGEORGE']).get();
console.log('Data requested:', site);
site.forEach(d => {
  console.log('Get: ', d.data());
});
}
const siteId = 'f5325182-e200-41cd-b0fd-2e7694be56d6'
const dateStr = '07/07/2020'
inQueries(siteId, dateStr).then(console.log()).catch(console.log())
