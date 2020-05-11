## Example Nextjs Firebase authentication application using [`next-iron-session`](https://github.com/vvo/next-iron-session) 
Inspired by the [`with-iron-session`](https://github.com/zeit/next.js/tree/canary/examples/with-iron-session) example.

This example creates an authentication system that uses a **signed and encrypted cookie to store session data**. It relies on [`next-iron-session`](https://github.com/vvo/next-iron-session).

It uses current best practices for authentication in the Next.js ecosystem.

**Features:**

- [Static Generation](https://nextjs.org/docs/basic-features/pages#static-generation-recommended) (SG), recommended example
- [Server-side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering) (SSR) example in case you need it
- Logged in status synchronized between browser windows/tabs using **`withUser`** hook and [`swr`](https://swr.now.sh/) module
- Layout based on the user's logged-in/out status
- Session data is signed and encrypted in a cookie

[`next-iron-session`](https://github.com/vvo/next-iron-session) also supports:

- Express / Connect middlewares
- Multiple encryption keys (password) to allow for seamless updates or just password rotation

---

## How to use

### Clone the example
Create two env files in the root folder:
`$ touch .env`
`$ touch .env.build`

**.env:** runtime environment variables
**.env.build:** build step environment variables

Content of **.env:**:

> FIREBASE_API_KEY=XXXXXXX
> 
> FIREBASE_AUTH_DOMAIN=XXXXXXX.firebaseapp.com
> 
> FIREBASE_DATABASE_URL=https://XXXXXXX.firebaseio.com
> 
> FIREBASE_PROJECT_ID=XXXXXXX
> 
> FIREBASE_STORAGE_BUCKET=XXXXXXX.appspot.com
> 
> FIREBASE_MESSAGING_SENDER_ID=XXXXXXX
> 
> FIREBASE_APP_ID=1=XXXXXXX.web=XXXXXXX
> 
> FIREBASE_MEASUREMENT_ID=G=XXXXXXX

Content of **.env.build:**:
> FIREBASE_API_KEY=XXXXXXX
> 
> FIREBASE_AUTH_DOMAIN=XXXXXXX.firebaseapp.com
>
> FIREBASE_DATABASE_URL=https://XXXXXXX.firebaseio.com
>
> FIREBASE_PROJECT_ID=XXXXXXX
>
> FIREBASE_STORAGE_BUCKET=XXXXXXX.appspot.com
>
> FIREBASE_MESSAGING_SENDER_ID=XXXXXXX
>
> FIREBASE_APP_ID=1=XXXXXXX.web=XXXXXXX
>
> FIREBASE_MEASUREMENT_ID=G=XXXXXXX
>
> FIREBASE_CLIENT_EMAIL=firebase-XXXXXXX@XXXXXXX.com
>
> FIREBASE_PRIVATE_KEY=XXXXXX


Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
