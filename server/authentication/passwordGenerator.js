import { generate } from 'generate-password'

export function generatePassword() {
    return generate({
        length: 12,
        numbers: true
    })
}
