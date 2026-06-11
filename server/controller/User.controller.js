

const userregistercontroller = async(req,res)=>{
    const {username,email,phone,password,role,isverifiyed}=req.body;
    const otp = null ;
     if(!username||!email||!phone||!password){
       throw new customerror("all fields are required")
     }
     const hashedpassword = await bcrypt.hash(password,10)
 
      const newuser = await userModel.create({username,email,phone,password:hashedpassword,role,otp})
      console.log(newuser)
      res.send("user created successfully ")
    
};

export {userregistercontroller};