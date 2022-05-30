import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
`

export const Container = styled.div`
	text-align: center;

	h1 {
		font-size: 5.5rem;
		font-weight: 300;
		letter-spacing: -0.4rem;
		line-height: 5rem;
		padding-bottom: 0.75rem;
	}

	p {
		font-size: 1.25rem;
		font-weight: 300;
	}
`

export const MutedText = styled.span`
	color: ${props => props.theme.colors.textMuted};
`
