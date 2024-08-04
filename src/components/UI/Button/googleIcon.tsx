import { IGoogleIconProps } from '@/types/types'


export default function GoogleIcon({ title, action }: IGoogleIconProps) {
	return (
		<a>
			<span
				className="material-symbols-outlined"
				onClick={action}
			>
				{title}
			</span>
		</a>
	)
}
