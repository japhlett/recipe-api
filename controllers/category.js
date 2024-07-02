import { CategoryModel } from "../models/category.js";


export const getCategories = async (req,res,next) =>{
    try {
        // Fetch all categories from the database
        const allCategories = await CategoryModel.find()
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

