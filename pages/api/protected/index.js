import { getSession } from 'next-auth/client';

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content:
        'This is a super secret message only visible to logged in users!',
    });
  } else {
    res.status(401).send();
  }
};
