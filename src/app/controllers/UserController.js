import User from '../models/User';

class UserController {
  async store(req, res) {
    const user = await User.create(req.body);

    return res.json({ ok: true, User: user });
  }
}

export default new UserController();
