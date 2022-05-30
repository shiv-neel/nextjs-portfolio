import { Box } from '@chakra-ui/react'
import React from 'react'
import { FaReact } from 'react-icons/fa'
import {
	SiFirebase,
	SiGraphql,
	SiNextdotjs,
	SiPostgresql,
	SiPython,
	SiRedux,
	SiTypescript,
} from 'react-icons/si'
import SkillCard from './SkillCard'

const Skills = () => {
	return (
		<Box className='grid grid-cols-4 gap-4'>
			<SkillCard
				icon={<SiTypescript />}
				title='Typescript'
				href='https://www.typescriptlang.org/'
			/>
			<SkillCard
				icon={<FaReact />}
				title='ReactJS'
				href='https://www.reactjs.org/'
			/>
			<SkillCard
				icon={<SiNextdotjs />}
				title='NextJS'
				href='https://nextjs.org/'
			/>
			<SkillCard
				icon={<SiRedux />}
				title='Redux'
				href='https://redux.js.org/'
			/>
			<SkillCard
				icon={<SiGraphql />}
				title='GraphQL'
				href='https://graphql.org/'
			/>
			<SkillCard
				icon={<SiPostgresql />}
				title='PostgreSQL'
				href='https://www.postgresql.org/'
			/>
			<SkillCard
				icon={<SiFirebase />}
				title='Firebase'
				href='https://firebase.google.com/'
			/>
			<SkillCard
				icon={<SiPython />}
				title='Python'
				href='https://www.python.org/'
			/>
		</Box>
	)
}

export default Skills
