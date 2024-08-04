import { ISlide } from '@/types/types'
import Link from 'next/link'
import './index.scss'

export default function Slide({ url, description }: ISlide) {
	const style = {
		backgroundImage: `url(${url})`,
		backgroundPosition: 'center center',
		width: '100%',
		height: '850px',

		backgroundRepeat: 'no-repeat',
	}
	return (
		<Link
			href={'/'}
			className='slide'
			style={{
				...style,
				objectFit: 'contain',
			}}
		/>
		// <img className='slide' src={url} alt={description} />
	)
}
