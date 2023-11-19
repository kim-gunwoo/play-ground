# nextjs build




## build & run

```sh
$ docker build . -t {name}
$ docker run -p 3000:3000 {name}
```

### 참고 링크 진행

> 참고 : 
> https://github.com/vercel/next.js/tree/canary/examples/with-docker

```js
// next.config.js
module.exports = {
  // ... rest of the configuration.
  output: 'standalone',
}
```
