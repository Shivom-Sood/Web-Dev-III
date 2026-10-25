use("HospitalDB")
// db.Doctors.insertMany([
//   { name: "Dr.Meera",  specialization: "Cardiology",  experience: 15, fees: 2200, salary: 900000 },
//   { name: "Dr.Arjun",  specialization: "Dermatology", experience: 7,  fees: 1200, salary: 400000 },
//   { name: "Dr.Sana",   specialization: "Gynecology",  experience: 12, fees: 1600, salary: 650000 },
//   { name: "Dr.Rohan",  specialization: "ENT",         experience: 5,  fees: 900,  salary: 300000 },
//   { name: "Dr.Priya",  specialization: "Oncology",    experience: 18, fees: 3000, salary: 1200000 },
//   { name: "Dr.Karan",  specialization: "Ortho",       experience: 8,  fees: 1500, salary: 450000 }
// ])
// db.Doctors.updateOne(
//   { name: "Dr.Vinay" },
//   { $rename: { specialiaztion: "specialization" } }
// )
//  db.Doctors.aggregate(
//      [
//          {$project:{
//            name:1,
//            fees:1,
//            salary:1,
//            experience:1,
//            _id:0
//          }

//          }
//          ,{
//             $match:{
//                 department:"Cardiology"
//             }
//          }
//      ]
//  )