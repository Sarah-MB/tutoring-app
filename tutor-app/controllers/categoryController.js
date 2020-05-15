const Category = require('./../models/categoryModel');
const Subject = require('./../models/subjectModel');
exports.create_category = async (req, res, next) =>{
    try{
        const category_name = await category_name.create({
            category_name : req.body.category_name,
             subjects: req.body.subjects
        });
        res.status(201).json({
            status: 'Success',
            category
        }); 
    }catch(err){
        res.status(500).json({
            status: 'fail',
            error: err
        })
    }
};
exports.update_category = async (req, res, next) =>{
    let category_name = await category_name.findById({_id: req.params.category_id});
        category = _.extend(category, req.body)
        category.save(err =>{
            if(err){
                res.status(400).json({
                    status: 'Fail',
                    error : "Error updating category.",
                    err
                })
            }
            res.status(200).json({
                Status: 'Success',
                category
            })
        });
};
exports.delete_category = async (req, res, next) =>{
    try {
        const category_name = await Category.findByIdAndDelete({_id: req.params.category_id });
        const subject = await Subject.deleteMany({category: req.params.category_id }, function(err){
            if(err){
                res.status(500).json({
                    status: 'fail',
                    err
                })
            }
            res.status(204).json({
                status: 'Success',
                data: null
            })
        });
        console.log(category, subject);  
      } catch(err) {
        console.log(err)
      }
};
exports.category_list = async (req, res, next) =>{
    try{
        const category_list = await Category.find();
        res.status(200).json({
            status: 'success',
            categories
        });
    }catch(err){
        res.status(400).json({
            status: 'Fail',
            error: err
        })
    }
};