interface StrengthColor {
  label: string;
  color: string;
}

// has number
const hasNumber = (value: string): boolean => new RegExp(/[0-9]/).test(value);

// has mix of small and capitals
const hasMixed = (value: string): boolean => new RegExp(/[a-z]/).test(value) && new RegExp(/[A-Z]/).test(value);

// has special chars
const hasSpecial = (value: string): boolean => new RegExp(/[!#@$%^&*)(+=._-]/).test(value);

// set color based on password strength
export const strengthColor = (count: number): StrengthColor => {
  if (count < 2) return { label: 'Poor', color: 'error.main' };
  if (count < 3) return { label: 'Weak', color: 'warning.main' };
  if (count < 4) return { label: 'Normal', color: 'warning.dark' };
  if (count < 5) return { label: 'Good', color: 'success.main' };
  if (count < 6) return { label: 'Strong', color: 'success.dark' };
  return { label: 'Poor', color: 'error.main' };
};

// password strength indicator
export const strengthIndicator = (value: string): number => {
  let strengths = 0;
  if (value.length > 5) strengths += 1;
  if (value.length > 7) strengths += 1;
  if (hasNumber(value)) strengths += 1;
  if (hasSpecial(value)) strengths += 1;
  if (hasMixed(value)) strengths += 1;
  return strengths;
};