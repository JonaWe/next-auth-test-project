import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
  ],
  callbacks: {
    signIn: async (profile, account, metadata) => {
      // guard for other providers then github
      if (!account || account.provider !== 'github') return;

      const res = await fetch('https://api.github.com/user/emails', {
        headers: {
          Authorization: `token ${account.accessToken}`,
        },
      });

      const emails = await res.json();

      if (!emails || emails.length === 0) return;

      // getting the primary email address
      const sortedEmails = emails.sort((a, b) => b.primary - a.primary);
      profile.email = sortedEmails[0].email;
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
