module.exports.header = (req, res) => {
  res.header({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Methods": req.method,
    "Access-Control-Allow-Headers": "Content-Type",
    "X-Powered-By": "TMFM",
    Author: "Gunasegarran",
    IPV4: req.connection.localAddress,
    IPV6: req.connection.remoteAddress,
    "Cache-Control": "no-store, no-cache, must-revalidate",
    Pragma: "no-cache",
    Expires: 0,
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
    "Content-Security-Policy": "default-src 'self'",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "Referrer-Policy": "no-referrer",
  });
};
