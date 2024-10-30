# Buzzvel Landing Page Implementation Test

This project is one of the steps in the selection process for the company Buzzvel. Here, a single-page Landing Page was created using the [`NextJS` framework](https://nextjs.org/) with [`styled-components`](https://styled-components.com/) as styling and [`framer-motion`](https://www.framer.com/motion/) for animations.

Live application link: https://buzzvel-lp.vercel.app/

Demonstration video link: https://drive.google.com/file/d/1Oh903InRae0muIlI9QkHNLRm71cJazww/view?usp=sharing

![Screen](https://github.com/user-attachments/assets/9bfd9698-1721-4ccc-8e72-87f4a5276a72)

## Getting Started

Use the correct version of NodeJS using [NVM](https://github.com/nvm-sh/nvm?tab=readme-ov-file#about):

```bash
nvm use
```

Install project dependencies:

```bash
npm i
```

Launch the application locally in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project organizational structure

- `components` folder: Brings together reusable components without specific logic, i.e., they are display components (dumb);
- `viewport` folder: Brings together sections (ViewPorts) of the pages, i.e., more specific components;
- `data` folder: Brings together all potentially dynamic data.

## Next steps

- A next step that could be taken in this project would be to meet with the design team to decide the best approach for Tablet resolutions, and thus be able to further evolve this experience;
- Another thing would be to bring this application data dynamically from a database or external API, with the aim of avoiding static content in the code;
- Continue the process of continuous evolution by carrying out tests to increasingly improve the user experience.
