const sendIfExist = (res, data, instName) => {
  if (data) {
    res.status(200).json(data);
  } else {
    res.status(404).send(`${instName} is not found.`);
  }
};

module.exports = {
  sendIfExist
};
