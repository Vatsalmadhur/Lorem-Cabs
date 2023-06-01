# FLOW CABS

Frontend website code for flowcabs.com

### Rules

1. Import all the fonts required for the webstie (max 2) from Google Font CDN.
2. All links should have norefer setup.
3. Make sure website is following a11y rules and is performing well with core web vitals.
4. Use constants where ever required don't use hard coded values.

### File structure, code styling and commit rules for this repo.

#### 1. Import order in file

1. React/Redux
2. Other npm packages
3. Developer modules

#### 2. File structure instructions

1. pages directory : Routes avaialble on the website.
2. src directory : source code for the website will come here. App directoly hold the component & containers for the app.
3. components: UI skeleton of the web component.
4. containers: Logic/integrations required to manage the compoents and their behaviour.

#### 3. Commit rules

Add aprropriate and brief commit message. Add description if required.
Prepend every commit with an icon justifying the commit reason

- ⚡ for feature
- 🐞 for bug fix
- 🧹 Code clean up
- 🔥 Hotfix
- 🧪 Testing purpose
- 🧩 Merge conflicts
- 🛠 Build fixes

#### PR rules

- Add proper description with the PR
- Make sure the code build is successfull on your local (Husky implementation is integrate to emforce this)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
# Lorem-Cabs
