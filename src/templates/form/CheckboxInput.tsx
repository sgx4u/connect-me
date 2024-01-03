import { Control, Controller } from 'react-hook-form';
import { Check } from 'lucide-react';

type TCheckboxInputProps = {
	name: string;
	label?: string;
	control: Control<any>;
	className?: string;
};

export default function CheckboxInput({ name, label, control, className }: TCheckboxInputProps) {
	return (
		<div className={className}>
			<Controller
				control={control}
				name={name}
				render={({ field }) => (
					<div className="relative flex items-center gap-2 rounded-md">
						<label className={`relative flex h-5 w-5 shrink-0 cursor-pointer rounded-full`} htmlFor={name}>
							<input
								{...field}
								id={name}
								type="checkbox"
								className={`peer h-full w-full cursor-pointer appearance-none rounded-full border-2 border-info bg-background transition-all checked:bg-info checked:bg-none hover:bg-info/20 hover:checked:bg-info-dark focus-visible:outline-info`}
							/>
							<span
								className={`pointer-events-none absolute h-full w-full p-1 opacity-0 transition-opacity peer-checked:opacity-100`}
							>
								<Check className={`h-full w-full text-text-secondary`} strokeWidth={3} />
							</span>
						</label>

						{label && <label className="text-sm">{label}</label>}
					</div>
				)}
			/>
		</div>
	);
}
