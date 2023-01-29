import express from 'express';
import cors from 'cors';

const app=express();
const port= 3000;

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:true}));

const users=[
    {
        id: "1",
        name:"Tamani",
        description:"Student",
        location:"Lusaka",
        ocuppation:"Developer"
    },
    {
        id: "2",
        name:"Thandiwe",
        description:"Student",
        location:"Chibombo",
        ocuppation:"Hair dresser"
    },
    {
        id: "3",
        name:"Sally",
        description:"Student",
        location:"Chibombo",
        ocuppation:"Engineer"
    },
    {
        id: "4",
        name:"Monisha",
        description:"Student",
        location:"Isoka",
        ocuppation:"devOps"
    },
    {
        id: "5",
        name:"Sharon",
        description:"Student",
        location:"Kabwe",
        ocuppation:"Plumber"
    },
    {
        id: "6",
        name:"Shadreck",
        description:"Student",
        location:"Malibu",
        ocuppation:"Chef"
    },
    {
        id: "7",
        name:"David",
        description:"Student",
        location:"Lusaka",
        ocuppation:"Developer Intern"
    },
    {
        id: "8",
        name:"Chibwe",
        description:"Student",
        location:"Mansa",
        ocuppation:"Producer"
    },
    {
        id: "9",
        name:"Cephas",
        description:"School leaver",
        location:"Mongu",
        ocuppation:"Farmer"
    },
    {
        id: "10",
        name:"Carlos",
        description:"Student",
        location:"China",
        ocuppation:"Supervisor"
    },
];

app.get("/", async(req,res)=>{
    res.send("Welcome to the Api, add /users to the url and get the data");
});

app.get("/users",()=>{
    res.send(users);
});

app.get("/users/:id",(req,res)=>{
    const {id}=req.params;
    const user =users.filter((u)=>u.id==id);
    res.send(user);
});

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
});
