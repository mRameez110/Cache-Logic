const signUp = async (req, res) => {
  const { id, username, email, password } = req.body;

  console.log("what is in request in signup of user Controller ", req.body);

  console.log("Req data check in signup user controller", req.body);
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(password.toString(), saltRounds);

  const result = addNewUser(id, username, email, hashedPassword);
  console.log(
    "Print data getted from  mock user data by add new user function",
    result
  );
  if (!result)
    throw new BadRequestError("Something wrong in register new user", 400);
  const { password: _, ...resultWithoutPassword } = result;

  res.status(200).send({
    Request: "Sucessful",
    New_User: resultWithoutPassword,
  });
};
