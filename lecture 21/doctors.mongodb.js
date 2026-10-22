use("HospitalDB")

//db.Doctors.find()
//Create operation

//1.insert   2.insertOne   3.insertMany

//db.Doctors.insert({
//    name:"Dr.Vinay",
//    specialiaztion:"Neurology",
//    experience:"20",
//    fees:"2500",
//    salary:"1000000"
//})

//db.Doctors.insertOne({
  //  name:"Dr.Kanchan",
    //specialization:"Ortho",
    //experience:"10",
    //fees:"1800",
    //salary:"350000"
//})

//db.Doctors.insertMany([
  //  {
    //name:"Dr.Alex",
    //specialization:"Pediatrician",
    //experience:"10",
    //fees:"1500",
    //salary:"200000",
//},
//{
  //      name:"Dr. John",
    //    specialization:"Neurologist",
      //   experience:10,
        // fees:"500",
         //salary:1000000,
         //department:"Neurology",
    // }
//])

//practice 
//practice 2 
//practice 3
//practice 4
// practice 5
// practice 6
//practice 7

// Read Operation

// 1.find() gives all present in the document 2.findOne() gives the one on top in the document 
//db.Doctors.find()
//db.Doctors.findOne()
//db.Doctors.find({name: "Dr.Kanchan"}) //brings all with name Kanchan
//db.Doctors.find({specialiaztion:"Neurology"}) // we get all doctors from Neuro field and findOne would've returned the first doctor 

//Update Operation

// 1.updateOne() 2.updateMany()
//db.Doctors.updateOne(
//  {name:"Dr.Alex"},
 // {
   // $set:{
    //  fees: 1400
   // }
  //}
//)

//db.Doctors.updateMany(
 // { name: "Dr.Vinay" },
  //{ $set: { department: "senior" } }
//)

//Delete Operation

//1. deleteOne()  2.deleteMany()
//db.Doctors.deleteOne({name:"Dr.Rakesh"})
