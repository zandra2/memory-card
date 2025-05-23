# Memory Card
This is a game where the player gets to select two cards and flip over. If the two cards match, they remain face up. If not, they are flipped face down again.  

The objective is to match all the pairs of cards with the least number of attempts. The game ends when all pairs are successfully matched.

## React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  
## Environment Setup

### Creating React App using Vite
[Vite](https://vitejs.dev/guide/) is a next-generation frontend build tool for web development. It was created by Evan You, the same developer behind the popular JavaScript framework Vue.js. The word "Vite" comes from the French word for "quick" or "fast," reflecting its primary focus on speed and efficiency.

### Create React App
Vite requires Node.js version 18+. 20+t App.
```
$ npm create vite@latest
```
`Then follow the prompts!` 

After running the _Vite_ command answers the following prompts on terminal:
1. Okay to proceed?(y) **y**
2. Project name: **your-project-name**
3. Select a framework: **React**
4. Select a variance: **Javascript**

Once that’s done run the following commands:

cd into your project folder
```
$ cd name-your-project
```
Install dependencies
```
$ npm install
```
To start the server
```
$ npm run dev
```
## Deployment
`Deployment setup`

Open **vite.config.js** add **base: "/repo-name/"**
```
export default defineConfig({
  plugins: [react()],
  base: "/memory-card/"
})
```
Create a new **.github** folder inside the main directory. 
1. add a **workflows** folder
2. add a file called **deploy.yml** inside the **workflows** folder and pasted in deployment setup code

## Github Setup
After creating a new repository on Github follow the following instruction

### …or create a new repository on the command line
```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/zandra2/memory-card.git
git push -u origin main
```

Note: 
1. `git add README.md` is optional
2. `git branch -M main` only runs this command if the initial setup branch is `main`. Otherwise, to change `master` branch to `main` branch. Run the following command before **git branch -M main** to change the initial branch name

```
git branch -m master main
```

### …or push an existing repository from the command line
```
git remote add origin https://github.com/zandra2/memory-card.git
git branch -M main
git push -u origin main
```

Once that is done go to the following path
```
Settings -> actions -> general -> workflow permissions
```
Look for **workflow permissions** and select `Read and write permissions` then click **save**. This is to allow future edits. 

One that is done. Click **Actions** tab and troubleshoot deployment issues if there’s any. Otherwise, Go to:

```
settings -> pages -> branch
```
Under **Branch** select `gh-pages` and click **save**

Once the `gh-pages` is set up. Check the **Action** tab to see `pages build and development` progress. 

After it is successful, go to and find your website url under the `Github pages`
```
settings -> pages -> Github pages
```

**Congratulations** you have successfully deployed your application!!

Note: future modifications on application will get an automatic re-build and deploy after each git push. 

**To Play the game**
https://zandra2.github.io/memory-card/
