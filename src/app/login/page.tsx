'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { loginResolver } from './loginValidation';

import TextInput from '@/templates/form/TextInput';
import ButtonElement from '@/elements/ButtonElement';
import CheckboxInput from '@/templates/form/CheckboxInput';

export type TLogin = {
	email: string;
	password: string;
};

export default function Login() {
	const router = useRouter();

	const todoForm = useForm<TLogin>({
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onSubmit',
		resolver: (data) => loginResolver(data),
	});

	const { handleSubmit, formState, control } = todoForm;
	const { errors } = formState;

	const submitForm = (data: TLogin) => {
		console.log(data);
		router.push('/');
	};

	return (
		<main className={`h-full w-full bg-bg-shape`}>
			<div className={`flex h-full flex-col items-center justify-center py-12 backdrop-blur-md sm:px-6 lg:px-8`}>
				<div className={`flex flex-col items-center gap-3`}>
					<div className={`relative h-14 w-14`}>
						<Image
							src="https://sgx4u.com/assets/images/common/logo.svg"
							fill
							alt="Your Company"
							className={`object-contain`}
						/>
					</div>
					<h2 className={`px-2 text-center text-2xl font-bold`}>Sign in to your account</h2>
				</div>

				<div className={`mt-10 w-[92vw] max-w-[480px]`}>
					<div
						className={`bg-background px-4 py-12 shadow-xl shadow-neutral-light xs:px-6 sm:rounded-lg sm:px-12`}
					>
						<form onSubmit={handleSubmit(submitForm)} className={`space-y-6`}>
							<TextInput
								name="email"
								label="Email"
								control={control}
								placeholder="Enter your email"
								errorMessage={errors.email?.message}
							/>

							<TextInput
								name="password"
								label="Password"
								control={control}
								placeholder="Enter your password"
								errorMessage={errors.password?.message}
							/>

							<div className={`flex items-center justify-between gap-2`}>
								<CheckboxInput name="rememberMe" label="Remember me" control={control} />
								<Link
									href="#"
									className={`rounded-sm text-sm font-medium text-info transition-all hover:text-success focus-visible:outline-info`}
								>
									Forgot password?
								</Link>
							</div>

							<ButtonElement type="submit" label="Sign in" className="w-full font-medium">
								Sign in
							</ButtonElement>
						</form>
					</div>

					<p className={`mt-10 text-center text-sm text-neutral-dark`}>
						Not a member?{' '}
						<Link
							href="#"
							className={`rounded-sm font-semibold text-info transition-all hover:text-success focus-visible:outline-info`}
						>
							Signup now
						</Link>
					</p>
				</div>
			</div>
		</main>
	);
}
