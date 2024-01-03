import { ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utilities/theme.util';

export const buttonVariants = cva('flex items-center justify-center', {
	variants: {
		variant: {
			info: 'bg-info text-text-secondary hover:bg-info-dark focus-visible:outline-info',
			info_outline:
				'bg-background text-info border-2 border-info hover:bg-info hover:text-text-secondary focus-visible:outline-info',
			success: 'bg-success text-text-secondary hover:bg-success-dark focus-visible:outline-success',
			success_outline:
				'bg-background text-success border-2 border-success hover:bg-success hover:text-text-secondary focus-visible:outline-success',
			warn: 'bg-warn text-text-secondary hover:bg-warn-dark focus-visible:outline-warn',
			warn_outline:
				'bg-background text-warn border-2 border-warn hover:bg-warn hover:text-text-secondary focus-visible:outline-warn',
			error: 'bg-error text-text-secondary hover:bg-error-dark focus-visible:outline-error',
			error_outline:
				'bg-background text-error border-2 border-error hover:bg-error hover:text-text-secondary focus-visible:outline-error',
			white: 'border-[1px] border-background font-medium text-text shadow-md shadow-neutral-light hover:shadow-sm focus-visible:outline-background',
			transparent: 'bg-transparent',
		},
		size: {
			default: 'px-4 py-2 rounded-md',
			sm: 'px-2 py-1 rounded-md',
			lg: 'px-6 py-2 rounded-lg',
			icon: 'w-[max-content] aspect-square rounded-full',
			icon_square: 'w-[max-content] aspect-square rounded-md',
			container: 'w-[max-content] h-[max-content]',
		},
	},
	defaultVariants: {
		variant: 'info',
		size: 'default',
	},
});

type TButtonPropsBase = ButtonHTMLAttributes<HTMLButtonElement>;

export type TButtonProps = TButtonPropsBase &
	VariantProps<typeof buttonVariants> & {
		label: string;
	};

export default function ButtonElement({ label, variant, size, className, ...props }: TButtonProps) {
	return (
		<button
			{...props}
			type={props.type || 'button'}
			className={cn('cursor-pointer transition-all', buttonVariants({ variant, size, className }))}
			title={label}
			aria-label={label}
		>
			{props.children}
		</button>
	);
}
