import { ISkills } from './../ts-interfaces/index';
import html from '../assets/html.png'
import css from '../assets/css.png'
import sass from '../assets/sass.png'
import js from '../assets/js.png'
import php from '../assets/php.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import jquery from '../assets/jquery.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import laravel from '../assets/laravel.png'
import codeigniter from '../assets/codeigniter.png'
import mongo from '../assets/mongo.png'
import mysql from '../assets/mysql.png'
import typescript from '../assets/typescript.png'
import python from '../assets/python.png'

const skills: ISkills = {
  markupLanguage: {
    name: 'Markup and Styling',
    skills: [
      {
        name: 'HTML',
        description: 'I can code this language from the scratch',
        rating: 8,
        icon: html,
      },
      {
        name: 'CSS',
        description: 'This is a css',
        rating: 8,
        icon: css,
      },
    ]
  },
  programminglanguage: {
    name: 'Programming Language(s)',
    skills: [
      {
        name: 'SASS',
        description: 'This is a sass',
        rating: 7,
        icon: sass,
      },
      {
        name: 'Javascript',
        description: 'This is a js',
        rating: 8,
        icon: js,
      },
      {
        name: 'PHP',
        description: 'This is a PHP',
        rating: 8,
        icon: php,
      },
      {
        name: 'TypeScript',
        description: 'This is a TypeScript',
        rating: 7,
        icon: typescript
      },
      {
        name: 'Python',
        description: 'This is a Python',
        rating: 5,
        icon: python
      },
    ]
  },
  frontend: {
    name: 'Frontend(s)',
    skills: [
      {
        name: 'Bootstrap',
        description: 'This is a bootstrap',
        rating: 8,
        icon: bootstrap,
      },
      {
        name: 'Tailwindcss',
        description: 'This is a tailwindcss',
        rating: 8,
        icon: tailwind,
      },
      {
        name: 'JQuery',
        description: 'This is a jquery',
        rating: 8,
        icon: jquery,
      },
      {
        name: 'React',
        description: 'This is a jquery',
        rating: 7,
        icon: react,
      },
    ]
  },
  backend: {
    name: "Backend(s)",
    skills: [
      {
        name: 'Node.js',
        description: 'This is a nodejs',
        rating: 6,
        icon: node,
      },
      {
        name: 'CodeIgniter',
        description: 'This is a codeigniter',
        rating: 8,
        icon: codeigniter,
      },
      {
        name: 'Laravel',
        description: 'This is a laravel',
        rating: 7,
        icon: laravel,
      },

    ]
  },
  database: {
    name: "Database(s)",
    skills: [
      {
        name: 'MongoDB',
        description: 'This is a mongodb',
        rating: 7,
        icon: mongo,
      },
      {
        name: 'MySQL',
        description: 'This is a mysql',
        rating: 8,
        icon: mysql,
      },
    ]
  }
}

export default skills
