import { ISlide } from '@/types/types'
import './index.scss'

export default function Slide({ url, description }: ISlide) {
	const style = {
		backgroundImage: `url(${url})`,
		backgroundPosition: 'center top',
		width: '100%',
		height: '850px',

		backgroundRepeat: 'no-repeat',
	}
	return (
		<div
			className='slide'
			style={{
				...style,
				objectFit: 'cover',
			}}
		/>
		// <img className='slide' src={url} alt={description} />
	)
}
