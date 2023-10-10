const getHome = (req, res) => {
  try {
    res.status(200).json({ message: "The GET route" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

const postHome = (req, res) => {
  try {
    res.status(201).json({ message: "The POST route" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = {
  getHome,
  postHome,
};