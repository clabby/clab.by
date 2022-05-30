import React from 'react'
import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { LinkNavObj } from './styled'

//--------------
// TYPES & PROPS
//--------------
type NavItem = {
	link: string
	icon: IconProp
	tooltip: string
}

type NavItems = NavItem[]

//--------------
// COMPONENT
//--------------
const LinkNav: React.FC = () => {
	const NAV_ITEMS: NavItems = [
		{
			link: 'https://github.com/clabby/',
			icon: ['fab', 'github'],
			tooltip: 'My GitHub',
		},
		{
			link: 'mailto:ben@clab.by',
			icon: 'envelope',
			tooltip: 'Contact Me',
		},
	]

	return (
		<LinkNavObj>
			{NAV_ITEMS.map(item => (
				<Nav.Item key={item.link}>
					<OverlayTrigger overlay={<Tooltip>{item.tooltip}</Tooltip>} placement='bottom'>
						<Nav.Link href={item.link}>
							<FontAwesomeIcon icon={item.icon} />
						</Nav.Link>
					</OverlayTrigger>
				</Nav.Item>
			))}
		</LinkNavObj>
	)
}

export default LinkNav
