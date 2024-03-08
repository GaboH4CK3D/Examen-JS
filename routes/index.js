import {Router}from "express";
const router = Router();

let users =[
    {
        id:"1",
        name:"Alan",
        adress:"lol",
        age:85,
    }
]

router.post('/users/create',(req,res)=>{
    //Body
    users.push(req.body);
    res.send("Ok");
})

router.get('/users', (req,res)=>{
    res.status(200).json(users);
});

router.put('/users/update/:id',(req,res)=>{
    const user=users.find(u=>u.id===req.params.id);
    if (!user){
        res.status(404).send("El recurso no se encuentra")
        return;
    }
    const updateUser={...user,...req.body}
    users=users.map(u=>u.id===req.params.id ? updateUser:u);
    res.status(200).send("Usuario actualizado");
})

export default router;
