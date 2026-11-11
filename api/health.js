
export default function handler(req, res) {
  res.status(200).json({
    status: "ok",
    project: "COCH COIN API",
    message: "Server is running"
  });
}

