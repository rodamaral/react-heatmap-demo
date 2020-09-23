import FormControl from '@material-ui/core/FormControl'
import React, { ChangeEvent, useState } from 'react'
import MaskedTextField from '../MaskedTextField'

export default function FormattedInputs() {
    const [value, setValue] = useState<string>('')

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <FormControl fullWidth>
            <MaskedTextField
                label="CEP"
                value={value}
                onChange={handleChange}
                name="textmask"
                id="formatted-text-mask-input"
                mask="00.000-000"
                radix="."
                onAccept={(value: any, mask: any) => console.log(value)}
                margin="dense"
                type="email"
                fullWidth
            />
        </FormControl>
    )
}
