export const required = (value) => value ? undefined : 'Field is required'


export const maxLengthCreator = (maxLength) => (value) =>
    value && value.length > maxLength ? `Must be ${maxLength} characters or less` : undefined