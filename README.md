
## Pinsoft assessment

Demo: https://pinsoft-assessment-emre-cil.netlify.app/

### Getting Started



#### Install Dependencies

```
pnpm install
```

#### Run

```
pnpm dev
```

#### Paths

Application using absolute paths
Example: '@/components/Counter/Counter';

if you don't want to use you can remove these lines from

> vite.config.ts

```
 resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
```

> tsconfig.json

```
"paths": {
      "@/*": ["./*"]
    }
```


### Scripts

| Script        | Description                        |
| ------------- | ---------------------------------- |
| pnpm dev      | Runs the application.              |
| pnpm build    | Create builds for the application. |
| pnpm preview  | Runs the Vite preview              |
| pnpm lint     | Display eslint errors              |
| pnpm lint:fix | Fix the eslint errors              |
| pnpm format   | Runs prettier for all files        |
| pnpm test     | Run tests                          |

### Check List
````
