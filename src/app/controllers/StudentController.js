import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      age: Yup.number()
        .positive()
        .integer()
        .required(),
      weight: Yup.number()
        .round()
        .moreThan(30)
        .required(),
      height: Yup.number()
        .moreThan(1)
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'validation fails on insert student' });
    }

    const { email } = req.body;

    const studentExists = await Student.findOne({ where: { email } });

    if (studentExists) {
      return res.status(400).json({ error: 'Student is already registered' });
    }

    /*
    if (!(await student.checkIsAdmin())) {
      return res
        .status(401)
        .json({ error: 'User does not permition to register a student' });
    }

    */

    const student = await Student.create(req.body);

    return res.json(student);
  }
}

export default new StudentController();
