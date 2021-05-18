export const errorCatch = (err, req, res, next) => {
  res.status(500)
  res.end()
}
