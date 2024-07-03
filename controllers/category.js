import { CategoryModel } from "../models/category.js";


export const getCategories = async (req,res,next) =>{
    try {
        // Get query params
        const {
            filter="{}",
            sort="{}",
            limit=10,
            skip=0,
            fields="{}"
        } = req.query;
        // Fetch all categories from the database
        const allCategories = await CategoryModel
        .find(JSON.parse(filter))
        .select(JSON.parse(fields))
        .limit(limit)
        .skip(skip);
        // returning a response
        res.status(200).json(allCategories); 
    } catch (error) {
        next(error);
    }
}

export const postCategory = async (req,res,next) =>{
    try {
        console.log(req.body);
        console.log(req.file);
        // Add category to database
        const newCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
}

// deleting a category
export const deleteCategory = async (req, res,next) =>{
    try {
       const deletedCategory = await CategoryModel.findByIdAndDelete(req.params.id) 
       res.json(`Category with ID ${req.params.id} deleted`);
    } catch (error) {
        next(error);
    }
}

// patching a category
export const updateCategory = async(req,res,next) =>{
    try {
        const updatedCategory = await CategoryModel.findByIdAndDelete(req.params.id)
        res.status(200).sen(updatedCategory);
    } catch (error) {
        next(error);
    }
}
