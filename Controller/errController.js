module.exports=(err,req,res,next)=>{
    err.statusCode=err.statusCode||500;
    err.status=err.status||'error';
    //console.log(err);
    if(err.code===11000 && err.keyPattern && err.keyPattern.email)
      err.message='Email already exists';
    res.status(err.statusCode).json({
      status:err.status,
      message:err.message
    });
}
