const User = require('../models/userModel');
const Subject = require('../models/subjectModel');
const Category = require('../models/categoryModel');
const Lesson = require('../models/lessonModel');

//tutor can register to take a subject in a category

exports.registerSubject = async (req, res, next ) =>{
try{
  const { subjectName, tutorId } = req.body

  const subject = await Subject.findOne({name:subjectName});
  if (!subject){
    return res
    .status(404).json({status: false, message: "Subject not found "})
  }

  const tutor = await User.findById(tutorId);
  if(!tutor){
    return res
    .status(404).json({status: false, message: "tutor not found "})
  }
  
  await Subject.findByIdAndUpdate(subject._id, { $push: { tutors : tutorId }},
    { new: true, useFindAndModify: false } 
    );
  await User.findByIdAndUpdate(tutorId,{$push: {subjects: subject._id }},
    {new: true, useFindAndModify:false }
     )
     const newSubject = await Subject.findOne({name:subjectName});

     return res
     .json({
       status: true,
       message: "subjects registered successfully",
       data: newSubject,
     })
  
}catch(err) {console.log(err)};

}

//tutors can get all subjects they registered to take

exports.getRegisteredSubjects = async (req, res, next )=>{
  try {
    const { tutorId } = req.body

    const tutor = await User.findById(tutorId);
    if(!tutor){
      return res 
      .status(404).json({status: false, message: "Invalid tutor Id"})
    }
    const result = await User.findById(tutorId).populate({path: 'subjects'})

    return res
    .status(200).json({status: true, message: result.subjects})
  } catch (error) {
    console.log(error)
  }
}