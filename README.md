# testTypeScript
just testing for typescript

sampletest.ts is a sample code in typescript. And sampletest.js is a code which is compiled using typescript.

## compile on MacOS

* 1st, you need to install typescript onto your mac os

I assume that you already installed Homebrew onto your computer. 

* install typescript

```bash
brew install typescript
```

* Compile typescript 

```bash
tsc  --target es5 sampletest.ts
```

* MacOSX already have javascript interprinter named osascript. So, you do not need to install any other javascript engine onto your computer (if you do not want to install addtionaly.)

```bash
osascript sampletest.js
```
