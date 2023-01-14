import { ISkills } from './../ts-interfaces/index'
import html from '../assets/html.png'
import css from '../assets/css.png'
import sass from '../assets/sass.png'
import js from '../assets/js.png'
import php from '../assets/php.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import jquery from '../assets/jquery.png'
import react from '../assets/react.png'
import express from '../assets/express.png'
import laravel from '../assets/laravel.png'
import codeigniter from '../assets/codeigniter.png'
import mongo from '../assets/mongo.png'
import mysql from '../assets/mysql.png'
import typescript from '../assets/typescript.png'
import python from '../assets/python.png'
// import sqlite from '../assets/sqlite.png'
import vb from '../assets/vb.png'
import rust from '../assets/rust.png'
import dotnet from '../assets/dotnet.png'
import nextjs from '../assets/nextjs.png'
import csharp from '../assets/csharp.png'

const skills: ISkills = {
	language: {
		name: 'Programming Languages',
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
				icon: typescript,
			},
			{
				name: 'Python',
				description: 'This is a Python',
				rating: 5,
				icon: python,
			},
			{
				name: 'Visual Basic',
				description: 'This is a Visual Basic',
				rating: 5,
				icon: vb,
			},
			{
				name: 'C#',
				description: 'This is a c#',
				rating: 5,
				icon: csharp,
			},
			{
				name: 'Rust',
				description: 'This is a Rust',
				rating: 5,
				icon: rust,
			},
		],
	},
	frontend: {
		name: 'Frontend Frameworks',
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
		],
	},
	backend: {
		name: 'Backend Frameworks',
		skills: [
			{
				name: 'Express JS',
				description: 'This is a expressjs',
				rating: 6,
				icon: express,
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
			{
				name: '.NET',
				description: 'This is a .net',
				rating: 7,
				icon: dotnet,
			},
			{
				name: 'Next.js',
				description: 'This is a next.js',
				rating: 7,
				icon: nextjs,
			},
		],
	},
	database: {
		name: 'Database',
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
			// {
			// 	name: 'SQLite',
			// 	description: 'This is a sqlite',
			// 	rating: 7,
			// 	icon: sqlite,
			// },
		],
	},
}

export default skills
