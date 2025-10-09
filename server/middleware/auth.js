import jwt from 'jsonwebtoken'


const userAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || req.headers.token;
    if (!token) {
      return res.json({ success: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded?.id) {
      return res.json({ success: false, message: "Invalid token" });
    }

    req.body = req.body || {}; // <--- add this line
    req.body.userId = decoded.id;

    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


export default userAuth;