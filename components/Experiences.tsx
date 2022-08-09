import { Box } from '@chakra-ui/react'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import ProjectCard from './ProjectCard'

export interface ExperienceCardType {
	title: string
	subtitle: string
	location: string
	description: string
	dates: string
	stack: string[]
}

const Experiences = () => {
	const EXPERIENCES: ExperienceCardType[] = [
		{
			title: 'Workiva',
			subtitle: 'Full Stack Software Engineer Intern',
			location: 'Ames, IA',
			description:
				"Worked on Workiva's Solution Applications team to develop and improve Workivas auditing and SOX compliance solutions.",
			dates: 'May 2022 - Present',
			stack: ['React', 'Dart', 'Redux', 'Kotlin', 'Graph DBMS'],
		},
		{
			title: 'Next Level Analytics',
			subtitle: 'Full Stack Software Engineer Intern',
			location: 'Ames, IA',
			description:
				"Worked on a lean startup operation to create data pipelines and application architecture for Next Level Analytics's social media analytics platform.",
			dates: 'January 2022 - June 2022',
			stack: ['React', 'Typescript', 'Python', 'PostgreSQL', 'Firebase'],
		},
		{
			title: 'Shiv Neel Private Tutoring',
			subtitle: 'Machine Learning/AI Instructor',
			location: 'Virtual',
			description:
				'Spearheaded private one-on-one virtual tutoring courses for nine different students grades 8-12 in Python to educate them on computer science principles, ranging from basic programming to game design and AI.',
			dates: 'May 2021 - Present',
			stack: ['Python', 'NumPy', 'TensorFlow'],
		},
	]
	return (
		<Box>
			{EXPERIENCES.map((xp, index) => (
				<ExperienceCard key={index} {...xp} />
			))}
		</Box>
	)
}

export default Experiences
