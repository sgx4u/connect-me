import { z } from 'zod';

import { TLogin } from './page';
import { TZodValidationError } from '@/types/validation.type';

const schema = z.object({
	email: z.string().min(1, 'Email is required').email(),
	password: z.string().min(1, 'Password is required'),
});

export const loginResolver = (data: TLogin) => {
	if (!data) return { values: {}, errors: {} };

	try {
		schema.parse(data);
		return { values: data, errors: {} };
	} catch (error) {
		if (error instanceof z.ZodError) {
			const issues = error.issues;
			const errors = issues.reverse().reduce((acc: TZodValidationError, issue) => {
				acc[issue.path[0]] = {
					message: issue.message,
				};
				return acc;
			}, {});
			return { values: {}, errors };
		}
		return { values: data, errors: {} };
	}
};
