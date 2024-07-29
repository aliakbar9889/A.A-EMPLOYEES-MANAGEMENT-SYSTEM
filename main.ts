import inquirer from "inquirer";
console.log("\n\tWELCOME TO IT INTELLIGENCE COMPANY\n\t");

let question = await inquirer.prompt([
    {
        name:"ans",
        type:"confirm",
        message:"ARE YOU LOOKING FOR JOB?",
        default:false
    }
]);

let ans = await inquirer.prompt([
    {
        name:"answer",
        type:"list",
        message:"WE HAVE THESE JOBS IN WHICH YOU CAN APPLY",
        choices:[
            {
                name:"AFFILIATE MARKETING",
                value:"AFFILIATE MARKETING"
            },
            {
                name:"WEB DEVELOPMENT",
                value:"WEB DEVELOPMENT"
            },
            {
                name:"GRAPHIC DESIGNING",
                value:"GRAPHIC DESIGNING"
            },
            {
                name:"DIGITAL MARKETING",
                value:"DIGITAL MARKETING"
            },
                
        ]
    }
]);
if (ans.answer === "AFFILIATE MARKETING") {
    let userinfo0 = await inquirer.prompt([
        {
            name:"name",
            type:"input",
            message:"ENTER YOUR NAME"
        },
    ]);
    
    let userinfo = await inquirer.prompt([
        {
            name:"num",
            type:"input",
            message:"ENTER YOUR MOBILE NUMBER"
        },
        
    ]);
    let userinfo2 = await inquirer.prompt([
        {
            name:"email",
            type:"input",
            message:"ENTER YOUR EMAIL ADRESS"    
        }
    ]);
    let userinfo3 = await inquirer.prompt([
        {
            name:"cnic",
            type:"input",
            message:"ENTER YOUR CNIC NUMBER"
        }
    ]);
    let userinfo4 = await inquirer.prompt([
        {
            name:"cv",
            type:"confirm",
            message:"KINDLY DROP YOUR CV HERE",
            default:false
    
        }
    ]);
    console.log(`${userinfo0.name} WE WILL UPDATE YOU ABOUT YOUR APPROACHMENT THROUGH YOUR EMAIL`);
    let userinfo5 = await inquirer.prompt([
        {
            name:"status",
            type:"confirm",
            default:false,
            message:"DO YOU WANT TO SEE YOUR STATUS"
        }
    ]);
    console.log(`YOUR APPLIED JOB : ${ans.answer}`);
    console.log(`YOUR NAME : ${userinfo0.name}`);
    console.log(`YOUR MOBILE NUMBER : ${userinfo.num}`);
    console.log(`YOUR EMAIL ADRESS : ${userinfo2.email}`);
    console.log(`YOUR CNIC NUMBER : ${userinfo3.cnic}`);
    
    
    
    
    
    console.log("THANKS FOR VISITING IT INTELLIGENCE COMPANY");
    
    
    
}

if (ans.answer === "WEB DEVELOPMENT") {
    let userinfo0 = await inquirer.prompt([
        {
            name:"name",
            type:"input",
            message:"ENTER YOUR NAME"
        },
    ]);
    
    let userinfo = await inquirer.prompt([
        {
            name:"num",
            type:"input",
            message:"ENTER YOUR MOBILE NUMBER"
        },
        
    ]);
    let userinfo2 = await inquirer.prompt([
        {
            name:"email",
            type:"input",
            message:"ENTER YOUR EMAIL ADRESS"    
        }
    ]);
    let userinfo3 = await inquirer.prompt([
        {
            name:"cnic",
            type:"input",
            message:"ENTER YOUR CNIC NUMBER"
        }
    ]);
    let userinfo4 = await inquirer.prompt([
        {
            name:"cv",
            type:"confirm",
            message:"KINDLY DROP YOUR CV HERE",
            default:false
    
        }
    ]);
    console.log(`${userinfo0.name} WE WILL UPDATE YOU ABOUT YOUR APPROACHMENT THROUGH YOUR EMAIL`);
    let userinfo5 = await inquirer.prompt([
        {
            name:"status",
            type:"confirm",
            default:false,
            message:"DO YOU WANT TO SEE YOUR STATUS"
        }
    ]);
    console.log(`YOUR APPLIED JOB : ${ans.answer}`);
    console.log(`YOUR NAME : ${userinfo0.name}`);
    console.log(`YOUR MOBILE NUMBER : ${userinfo.num}`);
    console.log(`YOUR EMAIL ADRESS : ${userinfo2.email}`);
    console.log(`YOUR CNIC NUMBER : ${userinfo3.cnic}`);
    console.log("THANKS FOR VISITING IT INTELLIGENCE COMPANY");
    
    
    
}
if (ans.answer === "GRAPHIC DESIGNING") {
    let userinfo0 = await inquirer.prompt([
        {
            name:"name",
            type:"input",
            message:"ENTER YOUR NAME"
        },
    ]);
    
    let userinfo = await inquirer.prompt([
        {
            name:"num",
            type:"input",
            message:"ENTER YOUR MOBILE NUMBER"
        },
        
    ]);
    let userinfo2 = await inquirer.prompt([
        {
            name:"email",
            type:"input",
            message:"ENTER YOUR EMAIL ADRESS"    
        }
    ]);
    let userinfo3 = await inquirer.prompt([
        {
            name:"cnic",
            type:"input",
            message:"ENTER YOUR CNIC NUMBER"
        }
    ]);
    let userinfo4 = await inquirer.prompt([
        {
            name:"cv",
            type:"confirm",
            message:"KINDLY DROP YOUR CV HERE",
            default:false
    
        }
    ]);
    console.log(`${userinfo0.name} WE WILL UPDATE YOU ABOUT YOUR APPROACHMENT THROUGH YOUR EMAIL`);
    let userinfo5 = await inquirer.prompt([
        {
            name:"status",
            type:"confirm",
            default:false,
            message:"DO YOU WANT TO SEE YOUR STATUS"
        }
    ]);
    console.log(`YOUR APPLIED JOB : ${ans.answer}`);
    console.log(`YOUR NAME : ${userinfo0.name}`);
    console.log(`YOUR MOBILE NUMBER : ${userinfo.num}`);
    console.log(`YOUR EMAIL ADRESS : ${userinfo2.email}`);
    console.log(`YOUR CNIC NUMBER : ${userinfo3.cnic}`);
    console.log("THANKS FOR VISITING IT INTELLIGENCE COMPANY");
    
    
    
}
if (ans.answer === "DIGITAL MARKETING") {
    let userinfo0 = await inquirer.prompt([
        {
            name:"name",
            type:"input",
            message:"ENTER YOUR NAME"
        },
    ]);
    
    let userinfo = await inquirer.prompt([
        {
            name:"num",
            type:"input",
            message:"ENTER YOUR MOBILE NUMBER"
        },
        
    ]);
    let userinfo2 = await inquirer.prompt([
        {
            name:"email",
            type:"input",
            message:"ENTER YOUR EMAIL ADRESS"    
        }
    ]);
    let userinfo3 = await inquirer.prompt([
        {
            name:"cnic",
            type:"input",
            message:"ENTER YOUR CNIC NUMBER"
        }
    ]);
    let userinfo4 = await inquirer.prompt([
        {
            name:"cv",
            type:"confirm",
            message:"KINDLY DROP YOUR CV HERE",
            default:false
    
        }
    ]);
    console.log(`${userinfo0.name} WE WILL UPDATE YOU ABOUT YOUR APPROACHMENT THROUGH YOUR EMAIL`);
    let userinfo5 = await inquirer.prompt([
        {
            name:"status",
            type:"confirm",
            default:false,
            message:"DO YOU WANT TO SEE YOUR STATUS"
        }
    ]);
    console.log(`YOUR APPLIED JOB : ${ans.answer}`);
    console.log(`YOUR NAME : ${userinfo0.name}`);
    console.log(`YOUR MOBILE NUMBER : ${userinfo.num}`);
    console.log(`YOUR EMAIL ADRESS : ${userinfo2.email}`);
    console.log(`YOUR CNIC NUMBER : ${userinfo3.cnic}`);
    console.log("THANKS FOR VISITING IT INTELLIGENCE COMPANY");
    
    
    
}


