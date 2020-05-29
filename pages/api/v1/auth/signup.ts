import nextConnect from 'next-connect';

import {
  passportMiddleware,
  expectJSONBodyMiddleware,
} from '../../../../src/server/auth/middlewares';
import { BAD_REQUEST, CREATED } from '../../../../src/utils/statusCodes';

export default nextConnect()
  .use(passportMiddleware)
  .use(expectJSONBodyMiddleware)
  .post((req, res) => {
    if (req.body.length === 0) {
      res.status(BAD_REQUEST).end();
    }

    const { username, password } = JSON.parse(req.body);

    if (!username || !password) {
      res.status(BAD_REQUEST).end();
    }

    // TODO: implement Profile interface here
    res.status(CREATED).end({ json: { username } });
  });
