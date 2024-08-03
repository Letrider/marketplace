import { ISlide } from '@/types/types'
import './index.scss'

export default function Slide({ url, description, isCurrent }: ISlide) {
	return (
		<div className='slide'>
			{<img src={url} alt={description} />}
		</div>
	)
}
