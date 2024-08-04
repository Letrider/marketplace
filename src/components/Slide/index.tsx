import { ISlide } from '@/types/types'
import Link from 'next/link'
import './index.scss'

export default function Slide({ url, description, href }: ISlide) {
	const style = {
		backgroundImage: `url(${url})`,
		backgroundPosition: 'center center',
		width: '100%',
		height: 'calc(100lvh - 150px)',

		backgroundRepeat: 'no-repeat',
	}
	return (
		<>
			{
				href !== undefined ? (
					<Link
						href={'/'}
						className='slide'
						style={{
							...style,
							objectFit: 'contain',
						}}
					/>
				) : (
					<div
						className='slide'
						style={{
							...style,
							objectFit: 'contain',
						}}
					/>
				)
			}
		</>


		// <img className='slide' src={url} alt={description} />
	)
}
