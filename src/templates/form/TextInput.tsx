import { Control, Controller } from 'react-hook-form';
import { AlertCircle } from 'lucide-react';

import { cn } from '@/utilities/theme.util';

type TTextInputProps = {
	name: string;
	label?: string;
	control: Control<any>;
	placeholder?: string;
	autocomplete?: string;
	errorMessage?: string;
	className?: string;
};

export default function TextInput({
	name,
	label,
	control,
	placeholder,
	autocomplete,
	errorMessage,
	className,
}: TTextInputProps) {
	return (
		<div className={className}>
			{label && (
				<label className="text-sm font-medium">
					{label} {errorMessage && <span className={`text-xs text-error`}>({errorMessage})</span>}
				</label>
			)}

			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<div className="relative mt-1 rounded-md">
						<input
							{...field}
							id={name}
							type="text"
							placeholder={placeholder || ''}
							autoComplete={autocomplete || 'none'}
							className={cn(
								`w-full rounded-md border-2 py-2.5 pl-3`,
								errorMessage ? 'app-input-error pr-10' : 'app-input-default',
							)}
						/>
						{errorMessage && (
							<div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3`}>
								<AlertCircle className={`h-6 w-6 text-error`} />
							</div>
						)}
					</div>
				)}
			/>
		</div>
	);
}
