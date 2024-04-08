import express from 'express';
import {prisma} from '../utils/prisma/index.js'

const router = express.Router();

router.post('/', async(req, res,next)=>{
    try{
        const {title, content} = req.body;
        const result = await prisma.categories.create({
            data: {
                title,
                content
            }
        })
        res.status(201).json(result);
    }catch(err){
        next(err);
    }
})

router.get('/', async(req, res, next)=>{
    try
        const result = await prisma.category.findMany();
        res.staus(200).json(result);
    }catch(err){
        next(err);
    }
})

export default router
