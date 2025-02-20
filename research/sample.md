# Starter Template Samples

## GitHub Templates

### react-developer-portfolio-template

#### Metadata
```json
{
  "name": "react-developer-portfolio-template",
  "full_name": "pavanmg007/react-developer-portfolio-template",
  "description": "🌐 ⚡ A minimal portfolio template for Developers",
  "url": "https://github.com/pavanmg007/react-developer-portfolio-template",
  "stars": 180,
  "forks": 69,
  "language": "JavaScript",
  "topics": [
    "css",
    "developer-portfolio",
    "html",
    "javascript",
    "portfolio-website",
    "portofolio",
    "react",
    "react-portfolio",
    "tailwindcss",
    "template"
  ],
  "last_updated": "2025-02-13T12:36:05Z",
  "license": "No license",
  "is_template": false
}
```

#### README
# React Developer Portfolio template
#### Live Demo https://react-portfolio-v1.netlify.app/
#### Figma Design https://www.figma.com/community/file/1116246660507537002
### Preview ( Dark Mode )

<img src="/preview.gif" alt="preview" width="600px" />

## Follow Below instructions to add your deatils in the portfolio.

### Change and customize every section according to your need, All you need to do is edit `/src/Details.js`

#### Open `/src/Details.js` & modify it as per your need.

```javascript
/ Enter your Personal Details here
export const personalDetails = {
  name: "Pavan MG",
  tagline: "I build things for web",
  img: profile,
  about: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  }
];

// Enter your Education Details here
export const eduDetails = { ... };

// Tech Stack and Tools
export const techStackDetails = { ... };

// Enter your Project Details here
export const projectDetails = [ ... ];

// Enter your Contact Details here
export const contactDetails = { ... };
```


---

### nest-next-boilerplate

#### Metadata
```json
{
  "name": "nest-next-boilerplate",
  "full_name": "PoProstuWitold/nest-next-boilerplate",
  "description": "Boilerplate for Nest.js, Next.js, TypeScript stack. Includes social logins, account verification, password change & recover, real-time chats and more.",
  "url": "https://github.com/PoProstuWitold/nest-next-boilerplate",
  "stars": 107,
  "forks": 28,
  "language": "TypeScript",
  "topics": [
    "boilerplate",
    "chat",
    "facebook",
    "github-actions",
    "google",
    "jwt",
    "nestjs",
    "nestjs-best-practices",
    "nextjs",
    "nodejs",
    "postgresql",
    "redis",
    "social-logins",
    "typescript"
  ],
  "last_updated": "2025-02-11T17:59:30Z",
  "license": "MIT License",
  "is_template": false
}
```

#### README
# nest-next-boilerplate
Boilerplate for Nest.js, Next.js, TypeScript stack. Includes social logins, account verification, password change & recover, real-time chats and more.

# Usage

###  0. Environmental variables
0.1. Create **``.env``** file in **``server``** root directory and fill with following:
```code
# APP
NODE_ENV='development'
APP_PORT=4000
ORIGIN='http://localhost:3000'
API_PREFIX='/api'

# JWT AUTH
JWT_ACCESS_SECRET_KEY='long-unpredictable-secret1'
JWT_ACCESS_EXPIRATION_TIME='5m'
JWT_REFRESH_SECRET_KEY='long-unpredictable-secret2'
JWT_REFRESH_EXPIRATION_TIME='30d'

# DATABASE
# change if you running in a different way than the one written in docker compose file
DB_TYPE='postgres'
DB_USERNAME='admin'
DB_PASSWORD='admin'
DB_HOST='postgres-main'
DB_PORT=5432
DB_DATABASE='postgres-nest'
DB_SYNC=true

# REDIS
# change if you running in a different way than docker compose
REDIS_HOST='redis-main'
REDIS_PORT=6379

# GOOGLE
OAUTH_GOOGLE_ID=[YOUR_GOOGLE_OAUTH_ID]
OAUTH_GOOGLE_SECRET=[YOUR_GOOGLE_SECRET]
OAUTH_GOOGLE_REDIRECT_URL='/api/v1/auth/google/redirect'

# FACEBOOK
OAUTH_FACEBOOK_ID=[YOUR_FACEBOOK_ID]
OAUTH_FACEBOOK_SECRET=[YOUR_FACEBOOK_SECRET]
OAUTH_FACEBOOK_REDIRECT_URL='/api/v1/auth/facebook/redirect'
``` 
0.2. Create **``.env``** file in **``workers/queues``** root directory and fill with following:

```code
# MAIL
SMTP_USER=[YOUR_SMTP_USER]
SMPT_PASSWORD=[YOUR_SMTP_PASSWORD]

# REDIS
# change if you running in a different way than docker compose
REDIS_HOST='redis-main'
REDIS_PORT=6379
``` 
#### **Tip**
For free email testing you can use service such as [Mailtrap](https://mailtrap.io/).

## With Docker

### 1. Run Docker containers
```bash
docker compose up 
```

## Without Docker
### 1. Change contents of ``DATABASE`` and ``REDIS`` sections in ``env`` files
**``server``**
```code
...

# DATABASE
DB_TYPE=[YOUR_DB_TYPE]
DB_USERNAME=[YOUR_DB_USERNAME]
DB_PASSWORD=[YOUR_DB_PASSWORD]
DB_HOST=[YOUR_DB_HOST]
DB_PORT=[YOUR_DB_PORT]
DB_DATABASE=[YOUR_DB_DATABASE]
DB_SYNC=[true or false in dev mode, false in prod]

# REDIS
REDIS_HOST=[YOUR_REDIS_HOST]
REDIS_PORT=[YOUR_REDIS_PORT]

...
```

**``workers/queues``**
```code
...

# REDIS
REDIS_HOST=[YOUR_REDIS_HOST]
REDIS_PORT=[YOUR_REDIS_PORT]
```
### 2.1 Server setup
```bash
cd server 
```
```bash
npm install 
# OR 
pnpm install 
# OR 
yarn
```

### 2.2 Worker
```bash
cd workers/queues
```
```bash
npm install 
# OR 
pnpm install 
# OR 
yarn
```

### 3. Client setup
```bash
cd client 
```
```bash
npm install 
# OR 
pnpm install 
# OR 
yarn
```

## FEATURES
- Local login & register
- Social login & register using Google and Facebook
- Jwt access token & refresh token
- Account confirmation
- Password recover
- Profile update
- Multiple themes with the ability to add your own
- Group chat with basic permissions
- Private chat (also with yourself)
- Rate limiting

## TECH STACK
- Backend:
    - Nest.js
    - PostgreSQL
    - Redis
    - WebSockets
    - JWT
    - Passport.js
- Frontend
    - Next.js
    - Tailwind & DaisyUI
    - Redux ([rematch](https://rematchjs.org/))
## TO DO
- [x] Local login
- [x] Google login
- [x] Facebook login
- [x] Client app routing
- [x] Write tests for API
- [x] Password recover & change features
- [x] Queues
- [x] Refresh tokens
- [X] Chat
- [ ] Make URL preview
- [ ] Enable sending images and maybe videos
- [ ] Public profile page
- [ ] Refactor chat backend & UI

## License
[MIT](https://choosealicense.com/licenses/mit/)


---

### vue3-template

#### Metadata
```json
{
  "name": "vue3-template",
  "full_name": "ywanzhou/vue3-template",
  "description": "一个 Vue3 + TS + Vite + Element-Plus 开箱即用的企业级开发模板。",
  "url": "https://github.com/ywanzhou/vue3-template",
  "stars": 463,
  "forks": 170,
  "language": "TypeScript",
  "topics": [
    "element-plus",
    "eslint",
    "prettier",
    "tailw",
    "tailwindcss",
    "template",
    "typescript",
    "vue",
    "vue3"
  ],
  "last_updated": "2025-02-16T15:03:54Z",
  "license": "MIT License",
  "is_template": true
}
```

#### README
# vue3 template

一个 Vue3 + TS + Vite + Element-Plus 开箱即用的企业级开发模板。


## 🎉有点用的小特性

1. 这个是 **Vue3.2**的模板
2. 支持 **Vite**
3. UI框架是 **Element-Plus** 它已经支持暗黑模式
4. CSS框架是 **TailwindCSS**
5. 状态管理是 **Pinia**
6. **ESlint+Prettier** 已经配置完成
7. Git **提交前验证**以及**提交规范**已做好
8. 封装的**比较完善**的 axios，有一丢丢的学习成本
9. Vue 和 VueRouter 的 API 自动引入，你还可以配置更多的 API 自动引入
10. 封装了一个 `useRequest`，让接口请求变得更加简单
11. 自带一个基础版本的动态路由，可以用作参考
12. 这个模板比较干净，需要你删除的的东西很少，也就是说需要自己编写的很多
13. 自带 **Plop** 脚手架，创建同类型文件会更快


## 🐉clone

这个是创建项目的第一步，可以按照我写的，你也可以随意发挥~

方式一：点击[Use this template](https://github.com/ywanzhou/vue3-template/generate)按钮，直接使用这个模板；

方式二：使用 `git clone` 命名，命令如下：
```bash
git clone https://github.com/ywanzhou/vue3-template.git
```

方式三：自行发挥~。

## ✨启动项目

这里我使用的包管理工具时npm，node版本大于 `16.9.0`。使用 npm 的主要原因是适应大多数人，毕竟 yarn 和 pnpm 需要安装，也是有些学习成本的；如果介意可以自行更换包管理工具。

现在开始正式启动这个项目

1. 安装依赖
```bash
npm install # 或者 npm i 或者 yarn
```
2. 开发过程
```bash
npm run dev # 运行

npm run dev:open # 自动打开浏览器
npm run dev:host # 添加 --host

npm run dev:host:open # 自动打开浏览器并添加 --host

```
3. 打包编译

```bash
npm run build
```
4. 预览

```bash
npm run preview
```
5. lint代码并格式化

```bash
npm run lint
```

## 📝有关的文章

- [封装axios](https://juejin.cn/post/7071518211392405541)
- [封装useRequest](https://juejin.cn/post/7094508831564103688)
- [动态权限路由](https://juejin.cn/post/7094506830230978591)
- [搭建过程](https://juejin.cn/post/7074885076823048223)


## 📖使用说明

待更新

## 🍚License

vue3-template is open source software licensed as [MIT](./LICENSE)

---

### electron-react-typescript

#### Metadata
```json
{
  "name": "electron-react-typescript",
  "full_name": "Robinfr/electron-react-typescript",
  "description": "Electron boilerplate with React, Redux, and TypeScript",
  "url": "https://github.com/Robinfr/electron-react-typescript",
  "stars": 432,
  "forks": 85,
  "language": "TypeScript",
  "topics": [
    "boilerplate",
    "electron",
    "react",
    "redux",
    "typescript"
  ],
  "last_updated": "2024-09-19T02:20:33Z",
  "license": "MIT License",
  "is_template": true
}
```

#### README
# electron-react-typescript

### A Boilerplate for an Easy Start with TypeScript, React, and Electron.

[![React](docs/img/react.png)](https://reactjs.org/)
[![Webpack](docs/img/webpack.png)](https://webpack.js.org/)
[![TypeScript](docs/img/ts.png)](https://www.typescriptlang.org/)
[![Electron](docs/img/electron.png)](https://electronjs.org/)
[![Redux](docs/img/redux.png)](https://redux.js.org/)
[![Jest](docs/img/jest.png)](https://facebook.github.io/jest/)

[Electron](https://electronjs.org/) application boilerplate based on [React](https://reactjs.org/), [Redux](https://redux.js.org/), and [Webpack](https://webpack.js.org/) for rapid application development using [TypeScript](https://www.typescriptlang.org/).

## Install
Clone the repository with Git:

```bash
git clone --depth=1 git@github.com:Robinfr/electron-react-typescript.git <your-project-name>
```

And then install the dependencies:

```bash
cd <your-project-name>
npm install
```

## Usage
Both processes have to be started **simultaneously** in different console tabs:

```bash
npm run start-renderer-dev
npm run start-main-dev
```

This will start the application with hot-reload so you can instantly start developing your application.

You can also run do the following to start both in a single process:

```bash
npm run start-dev
```

## Packaging
We use [Electron builder](https://www.electron.build/) to build and package the application. By default you can run the following to package for your current platform:

```bash
npm run dist
```

This will create a installer for your platform in the `releases` folder.

You can make builds for specific platforms (or multiple platforms) by using the options found [here](https://www.electron.build/cli). E.g. building for all platforms (Windows, Mac, Linux):

```bash
npm run dist -- -mwl
```

## Husky and Prettier
This project comes with both Husky and Prettier setup to ensure a consistent code style. 

To change the code style, you can change the configuration in `.prettierrc`. 

In case you want to get rid of this, you can removing the following from `package.json`:

1. Remove `precommit` from the `scripts` section
1. Remove the `lint-staged` section
1. Remove `lint-staged`, `prettier`, `eslint-config-prettier`, and `husky` from the `devDependencies`

Also remove all mentions of Prettier from the `extends` section in `.eslintrc.json`.

## About this project
This project was set up from scratch but is heavily influenced by the [Electron React Boilerplate project](https://github.com/chentsulin/electron-react-boilerplate) and [React Redux TypeScript guide](https://github.com/piotrwitek/react-redux-typescript-guide).

## License
MIT © [R. Franken](https://github.com/Robinfr)


---

### solidity-template

#### Metadata
```json
{
  "name": "solidity-template",
  "full_name": "mattstam/solidity-template",
  "description": "A Solidity starter template for developing smart contracts.",
  "url": "https://github.com/mattstam/solidity-template",
  "stars": 116,
  "forks": 17,
  "language": "TypeScript",
  "topics": [
    "contracts",
    "ethereum",
    "ethersjs",
    "foundry",
    "hardhat",
    "solidity",
    "template",
    "typescript",
    "web3"
  ],
  "last_updated": "2024-11-24T21:22:37Z",
  "license": "MIT License",
  "is_template": true
}
```

#### README
# [Solidity Template](#solidity-template)

[![Unit Tests](https://github.com/mattstam/solidity-template/actions/workflows/unit-test.yaml/badge.svg)](https://github.com/mattstam/solidity-template/actions/workflows/unit-test.yaml)
[![Integration Tests](https://github.com/mattstam/solidity-template/actions/workflows/integration-test.yaml/badge.svg)](https://github.com/mattstam/solidity-template/actions/workflows/integration-test.yaml)
[![Slither Static Analysis](https://github.com/mattstam/solidity-template/actions/workflows/slither.yaml/badge.svg)](https://github.com/mattstam/solidity-template/actions/workflows/slither.yaml)
[![Lint](https://github.com/mattstam/solidity-template/actions/workflows/lint.yaml/badge.svg)](https://github.com/mattstam/solidity-template/actions/workflows/lint.yaml)
[![NPM Version](https://img.shields.io/npm/v/@mattstam/solidity-template/latest.svg)](https://www.npmjs.com/package/@mattstam/solidity-template/v/latest)

This is a modern Solidity template for Ethereum smart contracts. It combines two extremely powerful frameworks:

- [Foundry](#foundry) - for Unit tests written in Solidity ([contracts/test/](./contracts/test/)).
- [Hardhat](#hardhat) - for Integration tests written in Typescript ([integration/](./integration/)).

This template optimizes and cleans up using these frameworks together (e.g. no `remappings.txt` or `/lib` submodules, using one [foundry.toml](./foundry.toml) as a source of truth for options). Dependencies are all managed through [NPM](./package.json).

Utilizing both frameworks allows you to comprehensively test every scenario, which should always be the case when planning to deploy *immutable* code. Both layers of testing also gives other developers a reference for how they should interact with your contracts:

- On-chain developers writing contracts that call these contracts can refer to your [Unit Test files](./contracts/test/) to see the expected usage in [Solidity](https://docs.soliditylang.org/en/latest/).

- Off-chain developers writing clients that call these contracts can refer to your [Integration Test files](./integration/) to see the expected usage in [JavaScript (TypeScript)](https://www.typescriptlang.org/) and [Ethers.js](https://docs.ethers.io/v5/).

These frameworks also offer some advanced tools for contract debugging, deployment, gas measurements, etc.

Other features of this template are linting rules for [Solidity](./.solhint.json) and [TypeScript](./.eslintrc.js), a [developer guide](#developer-guide) for new contributors to your project, a [LICENSE](./LICENSE) sample which can be changed, a sample [CLI](./scripts/console) for contract deployment and interactions, [documentation generation](https://github.com/primitivefinance/primitive-dodoc) from NatSpec comments, and useful [GitHub Actions](#github-actions--workflow-badges) already configured.

&nbsp;

## [Template Usage](#template-usage)

Go to the top right of [this repository](https://github.com/mattstam/solidity-template) and click the big green ["Use this template"](https://github.com/mattstam/solidity-template/generate) button:

[![Use this template](./media/template.png)](https://github.com/mattstam/solidity-template/generate)

Alternatively, you can set this template up through Foundry:

```sh
forge init --template https://github.com/mattstam/solidity-template <project-name>
```

This will create a copy of this repository for your project. A sample contract already exists, [Counter.sol](./contracts/Counter.sol), with its interface [ICounter.sol](./contracts/interfaces/ICounter.sol), Unit Test file [Counter.t.sol](./contracts/test/Counter.t.sol), and Integration Test file [counter.test.ts](./integration/counter.test.ts).


Use this as the foundation for how to write and test your contracts. Replace these with the contracts you want to build.

### [GitHub Actions & Workflow Badges](#github-actions--workflow-badges)

This repository comes with [GitHub Actions](https://github.com/features/actions) already configured. You can find them in the [./github/workflows](./.github/workflows/) directory. These will run the [Unit Tests](./.github/workflows/unit-test.yaml), [Integration Tests](./.github/workflows/integration-test.yaml), [Lint Check](./.github/workflows/lint.yaml), etc, during Pull Requests and merges to the master branch.

All that is required to get theses setup is to include your [`MNEMONIC`](https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase) environmental variable in the settings. In your GitHub repository, go to the `Settings` tab > `Security`/`Secrets`/`Actions` > click the big green "New repository secret" button:

![New repository secret](./media/secret.png)

The *Name* should be `MNEMONIC` and the *Secret* should be your [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) compatible phrase. Afterward you should see:

![MNEMONIC secret](./media/mnemonic.png)

If you would like to also get badges for your workflows shown on this README, just uncomment out the lines at the top of this README:

![badges](./media/badges.png)

### [Cleanup](#cleanup)

To make this specific to your project, just *Find And Replace* all the mentions of `mattstam/solidity-template`, `solidity-template`, and `Solidity Template` with the name of your project name.

Clear out everything in the [media](./media/) directory, as these images were just use in this README. Use this directory for your own project content instead.

Lastly, delete this [Template Usage](#template-usage) block in this README. You probably want to keep everything else, but customize it to your needs.

&nbsp;

## [Developer Guide](#developer-guide)

### [Directory Structure](#directory-structure)

```txt
integration/
|- counter.test.ts - "Integration tests with Hardhat"
scripts/
|- console.ts - "CLI for contracts"
|- deploy.ts - "Contract deployment functions"
contracts/
|- interfaces/
|--- ICounter.sol - "Interface contract"
|- test/
|--- Counter.t.sol - "Unit tests with Foundry"
|- Counter.sol - "Implementation contract"`
.env - "Real environment vars"
.env.example - "Example environment vars"
.eslintignore - "Ignore list for eslint"
.eslintrc - "Configure eslint"
.gitignore - "Ignore list for Git"
.solcover.js - "Configure coverage"
.solhint.json - "Configure Solidity linter"
.prettierignore - "Ignore list for Prettier"
.prettierrc.json - "Configure Prettier"
foundry.toml - "Configure Foundry"
hardhat.config.ts - "Configure Hardhat"
LICENSE - "Software license"
package.json - "Node dependencies"
slither.config.json - "Configure Slither"
tsconfig.json - "Configure Typescript"
```

--- *(not an extensive list of all files)* ---

&nbsp;

#### [Clone the repository](#clone-the-repository)

```sh
git clone https://github.com/mattstam/solidity-template.git && cd solidity-template
```

#### [Install Node.js / NPM](#install-nodejs--npm)

```sh
npm install -g npm
```

#### [Copy over a new `.env` file](#copy-over-a-new-env-file)

```sh
cp .env.example .env
```

Fill in *at least* your [`MNEMONIC`](https://metamask.zendesk.com/hc/en-us/articles/360015290032-How-to-reveal-your-Secret-Recovery-Phrase)

#### [Install Node dependencies](#install-node-dependencies)

```sh
npm i
```

#### [Install Foundry](#install-foundry)

```sh
curl -L https://foundry.paradigm.xyz | bash
```

Then, in a new terminal session or after reloading your `PATH`, run this to get
the latest [`forge`](https://book.getfoundry.sh/reference/forge/forge) and [`cast`](https://book.getfoundry.sh/reference/cast/cast) binaries:

```sh
foundryup
```

&nbsp;

## [Do Things](#do-things)

#### [Run the unit tests with Forge](#run-the-unit-tests-with-forge)

```sh
forge test
```

This will run everything in [contracts/test/](./contracts/test/), which utilizes [Forge](https://book.getfoundry.sh/forge/tests) to test contract code.

#### [Run the integration tests with Hardhat](#run-the-integration-tests-with-hardhat)

```sh
npm run test
```

This will run everything in [integration/](./integration/), which utilizes [Hardhat](https://hardhat.org/hardhat-runner/docs/getting-started#overview) to tests for full usage scenarios.

#### [Deploy to Goerli test network](#deploy-to-goerli-test-network)

Create a [.env](./.env) file matching the variables seen in [.env.example](./.env.example).

Getting fully prepared may involve getting a [`INFURA_API_KEY`](https://docs.infura.io/infura/getting-started) by signing up, and getting some test ETH on your target network via a [facet](https://goerlifaucet.com/).

Then run:

```sh
npm run deploy -- --network goerli
```

This will automatically update [deployments.json](./deployments.json), which gets exported with your [NPM package](./package.json). It will also become the default address to use when interacting with your contracts with the [CLI](./scripts/console).

#### [Generate documentation](#generate-documentation)

```sh
npm run doc
```

Sets up API docs from the [NatSpec](https://docs.soliditylang.org/en/latest/natspec-format.html) comments in your contract interfaces (ignoring implementations and libraries).

If desired, this can be updated to included all contract comments, and the path can be updated to a different location (such as if you want a seperate `docs` repository for your project).

&nbsp;

## [Foundry & Hardhat Info](#foundry--hardhat-info)

#### [Foundry](#foundry)

[Foundry](https://book.getfoundry.sh/) is a blazing fast, portable, and modular toolkit for Ethereum application development. It consists of:

- [Forge](https://book.getfoundry.sh/reference/forge/forge): Framework for [Unit / Fuzz testing](./contracts/test/) written in Solidity.
- [Cast](https://book.getfoundry.sh/reference/cast/cast): EVM interactions for contracts, transaction handling, and reading on-chain data.
- [Anvil](https://book.getfoundry.sh/reference/anvil/): A local testnet node with network forking capabilities.

Configuration details can be found in [foundry.toml](./foundry.toml).

#### [Hardhat](#hardhat)

[Hardhat](https://hardhat.org/getting-started/) is a complete Ethereum development environment. The [integration tests]((./integration/)) run on the [Hardhat network](https://hardhat.org/hardhat-network/), with each test written in [JavaScript (TypeScript)](https://www.typescriptlang.org/), utilizing the [Ethers.js](https://docs.ethers.io/v5/) library, and the [Mocha](https://mochajs.org/) testing framework.

Hardhat can also be extended (see the full [plugin list](https://hardhat.org/plugins/)). This project makes use of:

- [Hardhat Waffle](https://github.com/NomicFoundation/hardhat/blob/5659ee220069329df4354ba7cda446daaa24ab35/packages/hardhat-waffle/README.md) - test assertions with [Chai](https://ethereum-waffle.readthedocs.io/en/latest/matchers.html) matchers.
- [Hardhat Ethers](https://github.com/NomicFoundation/hardhat/blob/5659ee220069329df4354ba7cda446daaa24ab35/packages/hardhat-ethers/README.md) - integration with [Ethers.js](https://docs.ethers.io/v5/).
- [Hardhat Solhint](https://github.com/NomicFoundation/hardhat/blob/5659ee220069329df4354ba7cda446daaa24ab35/packages/hardhat-solhint/README.md) - integration with the Solidity language [Solhint linter](https://github.com/protofire/solhint).
- [Hardhat Gas Reporter](https://github.com/cgewecke/hardhat-gas-reporter) - gas cost summary of contract calls.
- [Hardhat Tracer](https://github.com/zemse/hardhat-tracer) - contract name tag for logs and advanced debugging.
- [Hardhat Contract Sizer](https://github.com/ItsNickBarry/hardhat-contract-sizer) - show output size of contracts.
- [Hardhat Etherscan](https://github.com/NomicFoundation/hardhat/blob/5659ee220069329df4354ba7cda446daaa24ab35/packages/hardhat-etherscan/README.md) - verify contract source code on [Etherscan](https://etherscan.io/).
- [Hardhat Dodoc](https://github.com/primitivefinance/primitive-dodoc) - documentation generation from [NatSpec](https://docs.soliditylang.org/en/latest/natspec-format.html).

Configuration details can be found in [hardhat.config.ts](./hardhat.config.ts), which inherits from [foundry.toml](./foundry.toml).

&nbsp;

## [Recommended VSCode Extensions](#recommended-vscode-extensions)

- [Solidity Visual Developer](https://marketplace.visualstudio.com/items?itemName=tintinweb.solidity-visual-auditor)
- [Solidity Language & Themes (only)](https://marketplace.visualstudio.com/items?itemName=tintinweb.vscode-solidity-language)
- [Solidity (by Hardhat authors)](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity)
- [Solidity (by Juan Blanco)](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.prettier-vscode)

&nbsp;

## [Deployments](#deployments)

All contract addresses for each network are stored in [deployments.json](./deployments.json).

&nbsp;

## [License](#license)

The code in this project is licensed under the [MIT License](./LICENSE).


---

### static-react

#### Metadata
```json
{
  "name": "static-react",
  "full_name": "jxnblk/static-react",
  "description": "Zero-configuration CLI React static renderer",
  "url": "https://github.com/jxnblk/static-react",
  "stars": 348,
  "forks": 29,
  "language": "JavaScript",
  "topics": [
    "cli",
    "react",
    "static",
    "zero-configuration"
  ],
  "last_updated": "2024-11-19T08:22:47Z",
  "license": "No license",
  "is_template": false
}
```

#### README

# static-react

Zero-configuration CLI React static renderer

[![Build Status][badge]](https://travis-ci.org/jxnblk/static-react)

[badge]: https://img.shields.io/travis/jxnblk/static-react.svg?style=flat-square


## Usage

```
npm i -g static-react
```

```
static-react RootComponent.js > index.html
```

Static-react include babel presets and React – there is no need to install them separately

## Examples

See the [examples/](examples) directory

## Fetching Data

Use the `getInitialProps` static method to fetch data or get server-side props for things like CSS-in-JS libraries.

```jsx
import React from 'react'
import fetch from 'isomorphic-fetch'

export default class extends React.Component {
  static getInitialProps = async () => {
    const data = await fetch('https://api.example.com/data')

    return {
      data
    }
  }

  render () {
    const { data } = this.props

    return (
      <html>
        <h1>Data</h1>
        <pre>
          {JSON.stringify(data, null, 2)}
        </pre>
      </html>
    )
  }
}
```

## CSS-in-JS

Use the `getInitialProps` to pass side effects from CSS-in-JS libraries as props.

```jsx
import React from 'react'
import { Box } from 'rebass'

export default class Root extends React.Component {
  static getInitialProps = async (app) => {
    const { ServerStyleSheet } = require('styled-components')
    const { renderToString } = require('react-dom/server')
    const sheet = new ServerStyleSheet()
    renderToString(
      sheet.collectStyles(app)
    )
    const css = sheet.getStyleTags()
    return { css }
  }

  static defaultProps = {
    css: ''
  }

  render () {
    const { css } = this.props

    return (
      <html>
        <head>
          ${css}
        </head>
        <body>
          <Box px={3} py={4}>
            Beep boop
          </Box>
        </body>
      </html>
    )
  }
}
```

---

MIT License


---

### create-next-stack

#### Metadata
```json
{
  "name": "create-next-stack",
  "full_name": "akd-io/create-next-stack",
  "description": "Create Next Stack is a website and CLI tool used to easily set up the boilerplate of new Next.js apps.",
  "url": "https://github.com/akd-io/create-next-stack",
  "stars": 569,
  "forks": 28,
  "language": "TypeScript",
  "topics": [
    "boilerplate",
    "cli",
    "eslint",
    "frontend",
    "nextjs",
    "prettier",
    "react",
    "scaffolding",
    "starter",
    "starter-kit",
    "template",
    "typescript",
    "web"
  ],
  "last_updated": "2025-02-06T14:37:23Z",
  "license": "MIT License",
  "is_template": false
}
```

#### README
# Create Next Stack

<p>
  <a aria-label="Last commit" href="https://github.com/akd-io/create-next-stack/commits/develop">
    <img alt="" src="https://img.shields.io/github/last-commit/akd-io/create-next-stack/develop?style=flat-square">
  </a>
  <a aria-label="License" href="https://github.com/akd-io/create-next-stack/blob/develop/packages/create-next-stack/LICENSE">
    <img alt="" src="https://img.shields.io/npm/l/create-next-stack?color=44cc11&style=flat-square">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/create-next-stack">
    <img alt="" src="https://img.shields.io/npm/v/create-next-stack?style=flat-square">
  </a>
  <a aria-label="Community Discord" href="https://discord.gg/7Ns5WwGjjZ">
    <img alt="" src="https://img.shields.io/badge/Discord-gray?style=flat-square&logo=discord">
  </a>
  <a aria-label="Twitter profile of the creator of Create Next Stack" href="https://twitter.com/akd_io">
    <img alt="" src="https://img.shields.io/badge/Twitter-gray?style=flat-square&logo=twitter">
  </a>
  <a aria-label="GitHub Repo stars" href="https://github.com/akd-io/create-next-stack">
    <img alt="" src="https://img.shields.io/github/stars/akd-io/create-next-stack?style=social">
  </a>
</p>

[Create Next Stack](https://www.create-next-stack.com/) is a website and CLI tool used to easily set up the boilerplate of new [Next.js](https://github.com/vercel/next.js) apps.

Where [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) lets you choose a single template only, Create Next Stack lets you pick and choose an array of technologies often used alongside Next.js, and free you of the pain of making them work together.

To get started, go to [create-next-stack.com](https://www.create-next-stack.com).

## Supported technologies

The table below provides an overview of the technologies currently supported by Create Next Stack.

<!-- CNS-START-OF-TECHNOLOGIES-TABLE -->

| Name                | Links                                                                                                                                                                                                                        |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Next.js             | [Website](https://nextjs.org/) - [Docs](https://nextjs.org/docs) - [Learn Next.js](https://nextjs.org/learn) - [GitHub](https://github.com/vercel/next.js) - [Wikipedia](https://en.wikipedia.org/wiki/Next.js)              |
| React               | [Website](https://reactjs.org/) - [Docs](https://reactjs.org/docs/getting-started.html) - [GitHub](https://github.com/facebook/react) - [Wikipedia](<https://en.wikipedia.org/wiki/React_(JavaScript_library)>)              |
| TypeScript          | [Website](https://www.typescriptlang.org/) - [Docs](https://www.typescriptlang.org/docs/) - [GitHub](https://github.com/microsoft/TypeScript) - [Wikipedia](https://en.wikipedia.org/wiki/TypeScript)                        |
| Emotion             | [Website](https://emotion.sh/) - [Docs](https://emotion.sh/docs/introduction) - [GitHub](https://github.com/emotion-js/emotion)                                                                                              |
| Styled Components   | [Website](https://styled-components.com/) - [Docs](https://styled-components.com/docs) - [GitHub](https://github.com/styled-components/styled-components)                                                                    |
| Tailwind CSS        | [Website](https://tailwindcss.com/) - [Docs](https://tailwindcss.com/docs) - [GitHub](https://github.com/tailwindlabs/tailwindcss)                                                                                           |
| Sass                | [Website](https://sass-lang.com/) - [Docs](https://sass-lang.com/documentation) - [Next.js-specific docs](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)                                          |
| CSS Modules         | [Website](https://github.com/css-modules/css-modules) - [Docs](https://github.com/css-modules/css-modules) - [Next.js-specific docs](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) |
| CSS Modules         | [Website](https://github.com/css-modules/css-modules) - [Docs](https://github.com/css-modules/css-modules) - [Next.js-specific docs](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) |
| Mantine             | [Website](https://mantine.dev/) - [Docs](https://mantine.dev/pages/getting-started/) - [GitHub](https://github.com/mantinedev/mantine)                                                                                       |
| Chakra UI           | [Website](https://chakra-ui.com/) - [Docs](https://chakra-ui.com/docs/getting-started) - [GitHub](https://github.com/chakra-ui/chakra-ui)                                                                                    |
| Material UI         | [Website](https://material-ui.com/) - [Docs](https://material-ui.com/getting-started/installation/) - [GitHub](https://github.com/mui-org/material-ui)                                                                       |
| Framer Motion       | [Website](https://www.framer.com/motion/) - [Docs](https://www.framer.com/docs/) - [GitHub](https://github.com/framer/motion)                                                                                                |
| React Hook Form     | [Website](https://react-hook-form.com/) - [Docs](https://react-hook-form.com/get-started) - [GitHub](https://github.com/react-hook-form/react-hook-form)                                                                     |
| Formik              | [Website](https://formik.org/) - [Docs](https://formik.org/docs/overview) - [GitHub](https://github.com/formium/formik)                                                                                                      |
| React Query         | [Website](https://tanstack.com/query/latest) - [Docs](https://tanstack.com/query/latest/docs/react/overview) - [GitHub](https://github.com/tanstack/query)                                                                   |
| React Icons         | [Website](https://react-icons.github.io/react-icons/) - [GitHub](https://github.com/react-icons/react-icons)                                                                                                                 |
| ESLint              | [Website](https://eslint.org/) - [Configuration](https://eslint.org/docs/user-guide/configuring/) - [Rules](https://eslint.org/docs/rules/) - [GitHub](https://github.com/eslint/eslint)                                     |
| Prettier            | [Website](https://prettier.io/) - [Docs](https://prettier.io/docs/en/index.html) - [Options](https://prettier.io/docs/en/options.html) - [GitHub](https://github.com/prettier/prettier)                                      |
| Husky               | [Website](https://typicode.github.io/husky/) - [Docs](https://typicode.github.io/husky/) - [GitHub](https://github.com/typicode/husky)                                                                                       |
| lint-staged         | [Website](https://github.com/okonet/lint-staged) - [GitHub](https://github.com/okonet/lint-staged)                                                                                                                           |
| pnpm                | [Website](https://pnpm.io/) - [Docs](https://pnpm.io/motivation) - [GitHub](https://github.com/pnpm/pnpm)                                                                                                                    |
| Yarn                | [Website](https://yarnpkg.com/) - [CLI Docs](https://yarnpkg.com/cli) - [GitHub](https://github.com/yarnpkg/berry)                                                                                                           |
| npm                 | [Website](https://www.npmjs.com/) - [Docs](https://docs.npmjs.com/) - [GitHub](https://github.com/npm/cli)                                                                                                                   |
| GitHub Actions      | [Website](https://github.com/features/actions) - [Docs](https://docs.github.com/en/actions) - [Workflow syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)                             |
| Plausible Analytics | [Website](https://plausible.io/) - [Docs](https://plausible.io/docs) - [GitHub](https://github.com/plausible/analytics)                                                                                                      |
| next-plausible      | [Website](https://next-plausible.vercel.app/) - [GitHub](https://github.com/4lejandrito/next-plausible)                                                                                                                      |
| Vercel              | [Website](https://vercel.com/) - [Docs](https://vercel.com/docs) - [CLI Docs](https://vercel.com/docs/cli)                                                                                                                   |
| Netlify             | [Website](https://www.netlify.com/) - [Docs](https://docs.netlify.com/) - [CLI Docs](https://cli.netlify.com/)                                                                                                               |

<!-- CNS-END-OF-TECHNOLOGIES-TABLE -->

## Usage

Below you see an overview of Create Next Stack's usage, including detailed information about arguments and options. The overview is the result of running `create-next-stack --help`

<!-- CNS-START-OF-HELP-OUTPUT -->

```
USAGE
  $ create-next-stack [APP_NAME] [FLAGS]

ARGUMENTS
  APP_NAME  The name of your app, optionally including a path prefix. Eg.:
            "my-app" or "path/to/my-app"

FLAGS
  -h, --help                    Shows the CLI help information.
  -v, --version                 Shows the CLI version information.
  --chakra                      Adds Chakra UI. (Component library) (Requires
                                Emotion and Framer Motion)
  --debug                       Show verbose error messages for debugging
                                purposes.
  --formatting-pre-commit-hook  Adds a formatting pre-commit hook. (Requires
                                Prettier)
  --formik                      Adds Formik. (Form library)
  --framer-motion               Adds Framer Motion. (Animation library)
  --github-actions              Adds a GitHub Actions continuous integration
                                workflow.
  --mantine                     Adds Mantine. (Component library) (Requires
                                Emotion)
  --material-ui                 Adds Material UI. (Component library) (Requires
                                Emotion)
  --netlify                     Adds Netlify. (Hosting)
  --package-manager=<option>    (required) Sets the preferred package manager.
                                (Required)
                                <options: pnpm|yarn|npm>
  --plausible                   Adds Plausible. (Analytics)
  --prettier                    Adds Prettier. (Code formatting)
  --react-hook-form             Adds React Hook Form. (Form library)
  --react-icons                 Adds React Icons. (Icon library)
  --react-query                 Adds React Query. (Server state management
                                library)
  --styling=<styling-method>    (required) Sets the preferred styling method.
                                (Required) <styling-method> =
                                emotion|styled-components|tailwind-css|css-modul
                                es|css-modules-with-sass
  --vercel                      Adds Vercel. (Hosting)
```

<!-- CNS-END-OF-HELP-OUTPUT -->

## All contributors

Contributions are welcome! Please see the [contributing guidelines](CONTRIBUTING.md) for more information.

<a href="https://github.com/akd-io/create-next-stack/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=akd-io/create-next-stack" />
</a>

## License

Create Next Stack is released under the [MIT License](LICENSE).


---

### StarAdmin-Free-React-Admin-Template

#### Metadata
```json
{
  "name": "StarAdmin-Free-React-Admin-Template",
  "full_name": "BootstrapDash/StarAdmin-Free-React-Admin-Template",
  "description": "Free React version of Star Admin",
  "url": "https://github.com/BootstrapDash/StarAdmin-Free-React-Admin-Template",
  "stars": 265,
  "forks": 183,
  "language": "JavaScript",
  "topics": [
    "admin-dashboard",
    "bootstrap",
    "kick-start",
    "react",
    "react-bootstrap",
    "react-template",
    "reactjs",
    "template"
  ],
  "last_updated": "2025-02-13T14:44:48Z",
  "license": "No license",
  "is_template": false
}
```

#### README
<a href="http://www.bootstrapdash.com/demo/star-admin-free/react/template/demo_1/preview/dashboard" target="_blank"><img src="screenshot.jpg"></a>

<h1>Star Admin Free React Template</h1>
Star Admin React is yet another incredible admin template from BootstrapDash that is based on Bootstrap framework. The template is tastefully designed and coded to perfection. Star Admin React comes packed with a lot of bootstrap components, UI elements and built-in sample pages to kick-start your project.
<br><br>
The template is highly customizable so that you can alter the design to suit your needs and give it a unique look and very well-documented to help you get started without any issues.

<h1>Credits:</h1>

- Bootstrap
- Material Design Icons
- React
- Chart.js

<h1>Browser Support:</h1>

Star Admin React is designed to work flawlessly with all the latest and modern web browsers.

- Chrome (latest)
- FireFox (latest)
- Safari (latest)
- Opera (latest)
- IE10+  

<h1>License Information:</h1>


Star Admin React is released under MIT license. Star Admin React is a free react admin template developed by BootstrapDash. Feel free to download it, use it, share it, and get creative with it.

<h1>How to use Star Admin React?</h1>


1 - Click the Clone or Download button in GitHub and download as a ZIP file or you can enter the command git clone https://github.com/BootstrapDash/StarAdmin-Free-React-Admin-Template.git in you terminal to get a copy of this template.

2 - After the files have been downloaded you will get a folder with all the required files

3 - You can install all the dependencies in the template by running the command 'npm install'. All the required files are in the node modules.

4 - You can serve the template with the command 'npm start'.

5 - Now that your project has now kick-started, all you need to do now is to code, code, and code to your heart's content.

<h1>How to Contribute?:</h1>


We love your contributions and we welcome them wholeheartedly. We believe the more the merrier.
To contribute make sure you have a Node.js and npm installed.

<h2>Next</h2>

After node and npm has been installed, follow the steps below to contribute.
  <br>
	1 - Fork and clone the repo of Star React Admin.
  <br>
	2 - Run the command 'npm install' to install all the dependencies.
  <br>
	3 - Enter the command 'npm start'. This will open Star React Admin in your default browser.
  <br>
	4 - Make your valuable contribution
  <br>
	5 - Submit a pull request.
  <hr>
	Do you need a template with more features and functionalities? Get more with our collection of the premium template with more plugins, eye catching animations, UI components, and sample pages all fitting together with a high-quality design.
Visit
  <a href="https://www.bootstrapdash.com" target="_blank">https://www.bootstrapdash.com</a> for more admin templates.


---

### VSCode_Template

#### Metadata
```json
{
  "name": "VSCode_Template",
  "full_name": "YKizou/VSCode_Template",
  "description": "Portfolio Website Template Based On VSCode Theme",
  "url": "https://github.com/YKizou/VSCode_Template",
  "stars": 147,
  "forks": 32,
  "language": "TypeScript",
  "topics": [
    "dev-portfolio",
    "front-end-template",
    "javascript",
    "portfolio",
    "portfolio-template",
    "portfolio-website",
    "react",
    "react-portfolio",
    "react-template",
    "tailwind",
    "tailwindcss",
    "template",
    "typescript",
    "vscode",
    "vscode-theme"
  ],
  "last_updated": "2025-02-08T07:21:29Z",
  "license": "MIT License",
  "is_template": false
}
```

#### README
# A clean, beautiful and responsive portfolio template Based On VSCode Theme!

![Template Screenshot](/public/Screenshot_Template.png?raw=true "Screenshot-template")



To view a live example, <a href="https://ykizou.com">click here.</a>

Feel free to use it as-is or customize it as much as you want.

If you want to contribute and make this much better for other developers, have a look at <a href="https://github.com/YKizou/VSCode_Template/issues">Issues</a>.

If you created something awesome and want to contribute, then feel free to open a <a href="https://github.com/YKizou/VSCode_Template/pulls">pull request</a>.


## Features
<ul>
  <li>Responsive</li>
  <li>Unique Design</li>
  <li>Easy to use</li>
</ul>

## Sections
✔️ Home  ✔️ About  ✔️ Resume   ✔️ Contact  

## How To Use
From your command line, clone and run VSCode_Template:

```
# Clone this repository
$ git clone https://github.com/YKizou/VSCode_Template

# Go into the repository
$ cd VSCode_Template

# Install dependencies
$ npm i

# Run Project
$ npm run start
```


## Deployment
When you are done with the setup, you should host your website online. We highly recommend to read through the <a href="https://create-react-app.dev/docs/deployment/#github-pages">Deploying on Github Pages</a> docs for React.

## Technologies Used
<ul>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
</ul>

## Thanks
If you like this portfolio template, don't forget to give it a ⭐ and also share it with me <a href="mailto:hello@ykizou.com">here</a>.





---

### vue-electron-template

#### Metadata
```json
{
  "name": "vue-electron-template",
  "full_name": "mubaidr/vue-electron-template",
  "description": "An Electron & Vue.js template with Hot-reloading enabled and common Vue plugins, dev, debug and build scripts configured.",
  "url": "https://github.com/mubaidr/vue-electron-template",
  "stars": 317,
  "forks": 54,
  "language": "JavaScript",
  "topics": [
    "boilerplate",
    "bulma",
    "electron",
    "electron-vue",
    "electronjs",
    "rollup",
    "rollup-js",
    "starter",
    "starter-template",
    "vue",
    "webpack",
    "webpack4"
  ],
  "last_updated": "2025-01-09T08:36:26Z",
  "license": "MIT License",
  "is_template": true
}
```

#### README
<p align="center"><img src="./_icons/logotype1blue.png"></p>

# Vue-Electron-Template

[![Build Status](https://travis-ci.org/mubaidr/vue-electron-template.svg?branch=master)](https://travis-ci.org/mubaidr/vue-electron-template)
[![Build status](https://ci.appveyor.com/api/projects/status/cjua6pdhjp9rqa1o?svg=true)](https://ci.appveyor.com/project/mubaidr/vue-electron-template)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

Template for building desktop applications using [Electronjs](https://electronjs.org) and [Vue.js](https://vuejs.org)

## NOTICE

[Vue3 Support](https://github.com/mubaidr/vue-electron-template/issues/907)

## Overview

This template takes advantage of `webpack-5` with `vue-loader`, `electron-builder`, and some of the most used plugins like `vue-router`, `vuex` and so much more to provide an easy to use development (with vscode debugging) enviroment with hot module replacement.

### Features

- [Bulma-Fluent](https://mubaidr.github.io/bulma-fluent/), a theme suitable for desktop application based on [Bulma](https://bulma.io/)
- [vue-router](https://github.com/vuejs/vue-router)
- [vuex](https://github.com/vuejs/vuex)
- [vue-electron](https://github.com/SimulatedGREG/vue-electron)
- [material-design-icons](http://google.github.io/material-design-icons/) installed
- Some built-in animaitons [animations.scss](src\renderer\assets\style\animations.scss)
- `SCSS`/`SASS` support with [vue-loader](https://github.com/vuejs/vue-loader/) (removes unused css/styles during build)
- `Typescript` support (for `Vuejs` as well)
- Worker scripts (to perform CPU-intensive operations), to use with nodejs `child_process` module. [Sample Worker File](src\utilities\workerSample.ts)
- Easily package your electron app using [electron-builder](https://github.com/electron-userland/electron-builder)
- `vue-devtools` installed
- `DEV`, `DEBUG` & `BUILD` NPM scripts
- `Babel` configured
- `ESLint` configured
- `vscode` debug config for renderer process debugging
- Process restarting when working in main process & hot module replacement for renderer
- Generates web/browser build in the `dist/web` directory too
- `--debug` paramter to enable dev tools in production build executeable

### Screenshot

<p align="center"><img src="./screenshot.png"></p>

### Getting Started

Clone this repository, install dependencies and run using either `dev`, `debug` or `build` command.

```bash
# Clone this repository
git clone https://github.com/mubaidr/vue-electron

# change directory to cloned path
cd vue-electron

# Install dependencies
npm install

# Run in `debug` mode, to debug app using VSCODE
npm run debug

# Run in `dev` mode
npm run dev

# Build installer for this app
npm run build
```

### Project structure

`src/main` contains electron main script.

`src/renderer` contains vue-js application.

`src/utilities/workerSample.ts` a sample worker script.

#### Credits

All credits to authors of packages and tools used in the project.

\* This template is inspired by [electron-vue](https://github.com/SimulatedGREG/electron-vue)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/jbeguna04"><img src="https://avatars3.githubusercontent.com/u/35353768?v=4" width="100px;" alt=""/><br /><sub><b>Jibbie R. Eguna</b></sub></a><br /><a href="#design-jbeguna04" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/eiurur"><img src="https://avatars0.githubusercontent.com/u/4101830?v=4" width="100px;" alt=""/><br /><sub><b>eiurur</b></sub></a><br /><a href="https://github.com/mubaidr/vue-electron-template/commits?author=eiurur" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


---

## NPM Packages

### create-expo

#### Metadata
```json
{
  "name": "create-expo",
  "description": "Create universal Expo apps",
  "version": "3.2.0",
  "url": "https://www.npmjs.com/package/create-expo",
  "repository": "git+https://github.com/expo/expo.git",
  "homepage": "https://docs.expo.dev",
  "keywords": [
    "expo",
    "react-native",
    "react"
  ],
  "publisher": "brentvatne",
  "maintainers": [
    "fiber-god",
    "betoatexpo",
    "ide",
    "brentvatne",
    "evanbacon",
    "quinlanj",
    "expoadmin",
    "tsapeta",
    "exponent",
    "wschurman",
    "bycedric",
    "lukmccall",
    "jonsamp",
    "princefleaswallow",
    "kudochien",
    "keith-kurak",
    "alanhughes",
    "simek",
    "gabrieldonadel",
    "szdziedzic",
    "douglowder",
    "kadikraman",
    "aleqsio",
    "radoslawkrzemien",
    "expo-bot",
    "philpl",
    "marklawlor"
  ],
  "last_updated": "2024-12-05T01:02:41.824Z",
  "score": 31.023108,
  "popularity": 1,
  "quality": 1,
  "maintenance": 1
}
```

#### README
No README available

---

### generator-wordpress

#### Metadata
```json
{
  "name": "generator-wordpress",
  "description": "A Yeoman generator for WordPress",
  "version": "2.0.3",
  "url": "https://www.npmjs.com/package/generator-wordpress",
  "repository": "git://github.com/wesleytodd/YeoPress.git",
  "homepage": "https://github.com/wesleytodd/YeoPress#readme",
  "keywords": [
    "yeoman-generator",
    "wordpress",
    "yeoman",
    "generator",
    "cli"
  ],
  "publisher": "jordanthedev",
  "maintainers": [
    "wesleytodd",
    "jordanthedev"
  ],
  "last_updated": "2019-12-02T23:14:54.888Z",
  "score": 132.99501,
  "popularity": 1,
  "quality": 1,
  "maintenance": 1
}
```

#### README
![image](http://wesleytodd.com/media/pages/index/yeopress.jpg)

# YeoPress

The officially un-official [Yeoman](https://github.com/yeoman/yeoman) Generator for [WordPress](http://wordpress.org/).  I magically take you from scratching your head wondering where to start, all the way to running the famous 5-minute install.  I have configuration options that will WOW you.  If you use Git, I can *git* you off the ground with WordPress as a submodule just by following a couple of prompts.  Have a custom base theme you always start your projects off with?  You can install that too, either straight from GitHub or by pointing me to a tarball.  Other things I do:

- Custom directory configuration
- Install WordPress as a Git submodule for easy version controlled updates
- Theme init hook for when you install a new theme
- Permission setting on install
- Create your database, all you have to do is make me a user
- Built in Vagrant configuration
- *New* Set custom defaults with `.yeopress` files
- *New* Environment based wp-config files, `local-config.php`

## How To Use

If you do not already have the Yeoman toolset installed do so now, and might as well install me at the same time *(NOTE: don't type the `$`)*:

	$ npm install -g yo generator-wordpress

While running if you get errors try running as super user:

	$ sudo npm install -g yo generator-wordpress

And run me:

	$ yo wordpress

Follow my prompts and WA-BAM....ASCII art!!!!

![image](http://wesleytodd.com/media/posts/yeopress-a-yeoman-generator-for-wordpress/yeopress-ascii-art.png)

### Advanced Usage

By specifying the `--advanced` flag you get access to more features:

- Vagrant: Sets up a Vagrant box using Puppet with all the requirements for running a WordPress site.
- WP version: Select a specific WordPress version to install
- Block external requests: Adds the `WP_HTTP_BLOCK_EXTERNAL` setting to config to lock down the admin
- Add core files to gitignore: Adds rules to the `.gitignore` file for the WordPress core files

### Reusing common settings

You probably want to be able to quickly zip through your install with similar settings for every project.  For example, you probably always want to use git but the default is no git.  You can define any custom defaults you want in `~/.yeopress`.  This file is just a json file with key-value pairs for the config settings you want.  Here is an example:

```json
{
	"git": true,
	"dbHost": "localhost",
	"dbName": "yeopress",
	"dbUser": "yeopress",
	"dbPass": "yeopress"
}
```

For a full example, open up the local `.yeopress` file that is created by the generator.  This file is located in the directory you ran `yo wordpress` in.

## Installing WordPress Plugins

New with `v1.4.0` is a subgenerator for installing plugins, `yo wordpress:plugin`.  You can supply a comma delimited list of plugin slugs to download.  YeoPress will download and unzip those plugins into your content directory.

### Visual Learner??

[Watch the video](http://www.youtube.com/watch?v=Em-NMCgNhhY).

ADD Visual Learner?  [Watch the shorter video](http://www.youtube.com/watch?v=WSG0P5VpSUk).

[Also see the wiki](https://github.com/wesleytodd/YeoPress/wiki)

[And here is the boring write-up...](http://wesleytodd.com/2013/5/yeopress-a-yeoman-generator-for-wordpress.html)

## Themes

Custom themes can be installed from GitHub or a Tarball.  Once installed, they are responsible for their own Gruntfile and related tasks.  A basic example template can be found in the [template branch](https://github.com/wesleytodd/YeoPress/tree/template) of this repo.  The example template comes with a few grunt tasks pre-configured:

- Regarde ([grunt-regarde](https://npmjs.org/package/grunt-regarde))
- Live Reload ([grunt-contrib-livereload](https://npmjs.org/package/grunt-contrib-livereload))
- Sass ([grunt-contrib-sass](https://npmjs.org/package/grunt-contrib-sass))
- JSHint ([grunt-contrib-jshint](https://npmjs.org/package/grunt-contrib-jshint))
- Bower ([grunt-bower-requirejs](https://npmjs.org/package/grunt-bower-requirejs))
- RequireJS ([grunt-contrib-requirejs](https://npmjs.org/package/grunt-contrib-requirejs))

More information on themes [here](https://github.com/wesleytodd/YeoPress/wiki/Themes) & [here](http://wesleytodd.com/2013/5/yeopress-themes.html)



---

