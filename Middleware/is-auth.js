module.exports = (req,res,next)=>{
    
    if(!req.session.isLoggedIn){
        console.log('is-auth');
        return res.redirect('/login')
    }
    next();
}