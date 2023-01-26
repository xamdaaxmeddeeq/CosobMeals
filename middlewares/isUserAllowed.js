// Middleware
function isUserAllowed(req, res, next) {
    sess = req.session;
  
    if (sess.user) {
      return next();
    } else {
      res.redirect("/auth/login");
    }
  }

  module.exports =  isUserAllowed;