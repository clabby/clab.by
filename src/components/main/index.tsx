import React from 'react'
import Typed from 'react-typed'
import { Wrapper, Container, MutedText } from './styled'
import LinkNav from '@components/nav'

export const Main: React.FC = () => {
	return (
		<Wrapper>
			<Container>
				<h1 className='mono-font'>
					<MutedText>{'> '}</MutedText>
					<Typed strings={["Hi! I'm Ben."]} typeSpeed={50} />
				</h1>
				<LinkNav />
			</Container>
		</Wrapper>
	)
}
