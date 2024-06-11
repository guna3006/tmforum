module.exports.suspiciousHeader = (req, res) => {
  res.header({
    "X-Powered-By": "TMFM",
    "X-Message": "Suspicious Activity",
    Author: "Gunasegarran",
    IPV4: req.connection.localAddress,
    IPV6: req.connection.remoteAddress,
  });
};
